// src/lib/seo.ts

import type { Metadata } from "next";

/** Host canónico de LEM-BOX Uruguay: www redirige al apex. */
export const SITE_URL = "https://lem-box.com.uy";

/** Host canónico de LEM-BOX Argentina: el apex redirige a www. */
export const AR_SITE_URL = "https://www.lem-box.com.ar";

/** Plataforma central, neutral de mercado, para el fallback global. */
export const X_DEFAULT_URL = "https://lem-box.com/acceder";

/** Rutas indexables con equivalente regional en Argentina. */
export const RECIPROCAL_ROUTES = [
  "/",
  "/servicios",
  "/privacidad",
  "/terminos",
] as const;

export type ReciprocalRoute = (typeof RECIPROCAL_ROUTES)[number];

/**
 * Next reemplaza `alternates` completo cuando una ruta lo declara, sin
 * combinarlo con el del layout. Cada página indexable tiene que publicar su
 * canonical y sus alternates propios o hereda los de la portada.
 */
export function regionalAlternates(pathname: ReciprocalRoute): Metadata["alternates"] {
  return {
    canonical: pathname,
    languages: {
      "es-UY": `${SITE_URL}${pathname}`,
      "es-AR": `${AR_SITE_URL}${pathname}`,
      "x-default": X_DEFAULT_URL,
    },
  };
}

/**
 * Rutas sin equivalente en Argentina (normativa aduanera uruguaya). Publican
 * canonical propia y ningún hreflang: un alternate hacia AR sería unidireccional
 * y apuntaría a una página que no es equivalente.
 */
export function localOnlyAlternates(pathname: string): Metadata["alternates"] {
  return { canonical: pathname };
}
