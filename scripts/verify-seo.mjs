#!/usr/bin/env node
// scripts/verify-seo.mjs
//
// Verifica la reciprocidad hreflang de LEM-BOX Uruguay con Argentina.
//
//   node scripts/verify-seo.mjs                     -> contrato estático (fuentes)
//   node scripts/verify-seo.mjs --url <base>        -> además, HTML realmente servido
//   node scripts/verify-seo.mjs --url <base> --peer <ar>  -> reciprocidad contra ese AR
//
// En preview el canonical y los alternates siguen apuntando al host de
// producción (metadataBase es fijo): eso es lo correcto, así que se contrastan
// contra SITE_URL, no contra la base que se está fetcheando. --peer permite
// cerrar la reciprocidad contra el preview argentino en vez de producción.
//
// Sin dependencias externas.

import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SITE_URL = "https://lem-box.com.uy";
const AR_SITE_URL = "https://www.lem-box.com.ar";
const X_DEFAULT_URL = "https://lem-box.com/acceder";
const ROUTES = ["/", "/servicios", "/privacidad", "/terminos"];
// Sin equivalente regional en Argentina: canonical propia y ningún hreflang.
const LOCAL_ONLY_ROUTES = ["/aduanas"];
// Todas las páginas indexables reales, tengan o no equivalente regional.
const ALL_INDEXABLE_ROUTES = [...ROUTES, ...LOCAL_ONLY_ROUTES];

// Next normaliza la raíz sin barra final al resolverla contra metadataBase.
// "https://host" y "https://host/" son el mismo recurso (RFC 3986), y ambos
// repos normalizan igual, así que la reciprocidad sigue casando literalmente.
const abs = (base, route) => (route === "/" ? base : `${base}${route}`);

const failures = [];
const fail = (rule, detail) => failures.push(`${rule}: ${detail}`);
const read = (p) => readFileSync(join(ROOT, p), "utf8");

/* ---------------------------------------------------------------- estático */

function checkContractModule() {
  const src = read("src/lib/seo.ts");
  if (!src.includes(`export const AR_SITE_URL = "${AR_SITE_URL}"`)) {
    fail("ar-alternate-www", `el alternate AR debe ser ${AR_SITE_URL}, con www`);
  }
  if (/AR_SITE_URL = "https:\/\/lem-box\.com\.ar"/.test(src)) {
    fail("ar-alternate-www", "el alternate AR no puede apuntar al apex, que redirige a www");
  }
  if (!src.includes(`export const SITE_URL = "${SITE_URL}"`)) {
    fail("uy-canonical", `la canonical propia debe seguir siendo ${SITE_URL}`);
  }
  if (!src.includes(`export const X_DEFAULT_URL = "${X_DEFAULT_URL}"`)) {
    fail("x-default", `x-default debe ser ${X_DEFAULT_URL}`);
  }
}

// Next reemplaza `alternates` entero: sin declaración propia, /servicios y las
// legales heredan los de la portada y quedan apuntando a la home argentina.
function checkPerRouteAlternates() {
  for (const route of ROUTES) {
    const file = route === "/" ? "src/app/layout.tsx" : `src/app${route}/page.tsx`;
    if (!read(file).includes(`regionalAlternates("${route}")`)) {
      fail("route-alternates", `${file} debe declarar regionalAlternates("${route}")`);
    }
  }
  for (const route of LOCAL_ONLY_ROUTES) {
    const file = `src/app${route}/page.tsx`;
    const src = read(file);
    if (!src.includes(`localOnlyAlternates("${route}")`)) {
      fail("non-reciprocal", `${file} no tiene equivalente AR: debe usar localOnlyAlternates`);
    }
    if (src.includes("regionalAlternates")) {
      fail("non-reciprocal", `${file} no puede publicar hreflang unidireccional hacia AR`);
    }
  }
}

// `openGraph` se reemplaza igual que `alternates`: sin declaración propia,
// toda subruta hereda el og:url de la portada. Cada página indexable real
// —tenga o no equivalente regional— tiene que declarar el suyo.
function checkPerRouteOpenGraph() {
  for (const route of ALL_INDEXABLE_ROUTES) {
    const file = route === "/" ? "src/app/layout.tsx" : `src/app${route}/page.tsx`;
    if (!read(file).includes(`regionalOpenGraph("${route}")`)) {
      fail("route-og-url", `${file} debe declarar regionalOpenGraph("${route}") o hereda el og:url de la portada`);
    }
  }
}

// El sitemap tiene que derivarse de las rutas reales, sin fragments ni
// query strings hardcodeados en la fuente.
function checkSitemapSource() {
  const sm = read("src/app/sitemap.ts");
  if (!sm.includes("ALL_INDEXABLE_ROUTES") || !sm.includes("SITE_URL")) {
    fail("sitemap-source", "sitemap.ts debe derivarse de ALL_INDEXABLE_ROUTES y SITE_URL");
  }
  if (stripComments(sm).includes("#")) {
    fail("sitemap-fragments", "el sitemap no debe publicar anclas: duplican la home");
  }
  // Busca "?" solo dentro de literales de string, no en operadores ternarios.
  const stringLiterals = [...stripComments(sm).matchAll(/`[^`]*`|"[^"]*"|'[^']*'/g)].map((m) => m[0]);
  if (stringLiterals.some((s) => s.includes("?"))) {
    fail("sitemap-query", "el sitemap no debe publicar query strings");
  }
}

const stripComments = (src) =>
  src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");

// El alternate tiene que conservar el pathname: la portada nunca es el
// equivalente regional de /servicios ni de las páginas legales.
function checkPathnameEquivalence() {
  const src = read("src/lib/seo.ts");
  if (!src.includes("${AR_SITE_URL}${pathname}") || !src.includes("${SITE_URL}${pathname}")) {
    fail("pathname-equivalence", "los alternates deben componerse con el pathname de la ruta");
  }
}

/* -------------------------------------------------------------------- live */

const attr = (tag, name) =>
  tag.match(new RegExp(`${name}="([^"]*)"`, "i"))?.[1] ?? null;

// Next puede emitir la metadata en streaming, después de </head>, en rutas
// dinámicas: el parseo va sobre el documento completo salvo los <script>,
// donde el payload RSC reitera los mismos tags en JSON escapado.
const markup = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, "");

const linksOf = (html, rel) =>
  [...markup(html).matchAll(/<link\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((t) => attr(t, "rel")?.toLowerCase() === rel);

const metasOf = (html, prop) =>
  [...markup(html).matchAll(/<meta\b[^>]*>/gi)]
    .map((m) => m[0])
    .filter((t) => (attr(t, "property") || attr(t, "name") || "").toLowerCase() === prop);

async function get(url) {
  const res = await fetch(url, { redirect: "follow" });
  return { res, body: await res.text() };
}

async function checkLive(base, peer) {
  for (const route of ALL_INDEXABLE_ROUTES) {
    const url = `${base}${route === "/" ? "/" : route}`;
    const { res, body } = await get(url);
    if (!res.ok) {
      fail("live-route", `${url} devolvió ${res.status}`);
      continue;
    }

    const canonical = linksOf(body, "canonical").map((t) => attr(t, "href"))[0];
    if (canonical !== abs(SITE_URL, route)) {
      fail("live-canonical", `${route}: canonical ${canonical}, esperado ${abs(SITE_URL, route)}`);
    }

    const ogUrlTags = metasOf(body, "og:url");
    if (ogUrlTags.length > 1) {
      fail("live-og-url-duplicate", `${route}: ${ogUrlTags.length} og:url, se esperaba 1`);
    }
    const ogUrl = ogUrlTags[0] ? attr(ogUrlTags[0], "content") : null;
    if (ogUrl !== abs(SITE_URL, route)) {
      fail("live-og-url", `${route}: og:url ${ogUrl}, esperado ${abs(SITE_URL, route)}`);
    }

    const alts = Object.fromEntries(
      linksOf(body, "alternate").map((t) => [attr(t, "hreflang"), attr(t, "href")])
    );

    if (LOCAL_ONLY_ROUTES.includes(route)) {
      if (Object.keys(alts).length) {
        fail("live-non-reciprocal", `${route}: no debe publicar hreflang, tiene ${Object.keys(alts)}`);
      }
      continue;
    }

    for (const lang of ["es-UY", "es-AR", "x-default"]) {
      if (!alts[lang]) fail("live-hreflang", `${route}: falta hreflang ${lang}`);
    }
    if (alts["x-default"] && alts["x-default"] !== X_DEFAULT_URL) {
      fail("live-hreflang", `${route}: x-default ${alts["x-default"]}, esperado ${X_DEFAULT_URL}`);
    }

    const ar = alts["es-AR"];
    if (ar) {
      if (!ar.startsWith(`${AR_SITE_URL}/`) && ar !== AR_SITE_URL) {
        fail("live-ar-apex", `${route}: el alternate AR debe llevar www, es ${ar}`);
      }
      if (new URL(ar).pathname !== route) {
        fail("live-pathname", `${route}: el alternate AR apunta a ${ar}, no a la ruta equivalente`);
      }
    }

    const uy = alts["es-UY"];
    if (uy && new URL(uy).pathname !== route) {
      fail("live-pathname", `${route}: el alternate UY apunta a ${uy}, no a la ruta equivalente`);
    }
  }

  await checkSitemapLive(base);
  await checkReciprocity(peer ?? AR_SITE_URL);
}

async function checkSitemapLive(base) {
  const { res, body } = await get(`${base}/sitemap.xml`);
  if (!res.ok) return fail("live-sitemap", `${base}/sitemap.xml devolvió ${res.status}`);

  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  // El sitemap construye la URL literal `${SITE_URL}${route}`, sin pasar por
  // metadataBase: a diferencia de canonical/alternates, la raíz sí lleva "/".
  const expected = new Set(ALL_INDEXABLE_ROUTES.map((r) => `${SITE_URL}${r}`));

  if (locs.some((l) => l.includes("#"))) fail("live-sitemap-fragments", "el sitemap contiene anclas");
  if (locs.some((l) => l.includes("?"))) fail("live-sitemap-query", "el sitemap contiene query strings");
  if (new Set(locs).size !== locs.length) fail("live-sitemap-duplicates", "el sitemap tiene URLs duplicadas");

  const extra = locs.filter((l) => !expected.has(l));
  if (extra.length) fail("live-sitemap-noncanonical", `URL no indexable en el sitemap: ${extra.join(", ")}`);

  const missing = [...expected].filter((u) => !locs.includes(u));
  if (missing.length) fail("live-sitemap-missing", `rutas indexables ausentes del sitemap: ${missing.join(", ")}`);
}

/** Cada alternate es-AR tiene que devolver el hreflang es-UY inverso. */
async function checkReciprocity(peerBase) {
  for (const route of ROUTES) {
    const target = `${peerBase}${route === "/" ? "/" : route}`;
    const { res, body } = await get(target);
    if (!res.ok) {
      fail("reciprocity", `${target} devolvió ${res.status}`);
      continue;
    }
    const back = linksOf(body, "alternate")
      .map((t) => [attr(t, "hreflang"), attr(t, "href")])
      .find(([lang]) => lang === "es-UY")?.[1];
    if (!back) fail("reciprocity", `${target} no publica hreflang es-UY de vuelta`);
    else if (back !== abs(SITE_URL, route)) {
      fail("reciprocity", `${target} devuelve es-UY hacia ${back}, esperado ${abs(SITE_URL, route)}`);
    }
  }
}

/* -------------------------------------------------------------------- main */

checkContractModule();
checkPerRouteAlternates();
checkPerRouteOpenGraph();
checkPathnameEquivalence();
checkSitemapSource();

const urlIndex = process.argv.indexOf("--url");
if (urlIndex !== -1) {
  const base = process.argv[urlIndex + 1]?.replace(/\/$/, "");
  if (!base) {
    fail("usage", "--url requiere una base, p.ej. --url https://preview.vercel.app");
  } else {
    const peerIndex = process.argv.indexOf("--peer");
    const peer = peerIndex === -1 ? undefined : process.argv[peerIndex + 1].replace(/\/$/, "");
    await checkLive(base, peer);
  }
}

if (failures.length) {
  console.error(`verify:seo — ${failures.length} contrato(s) incumplido(s):\n`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("verify:seo — reciprocidad hreflang Uruguay↔Argentina OK");
