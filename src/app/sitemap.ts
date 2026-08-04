

import type { MetadataRoute } from "next";
import { ALL_INDEXABLE_ROUTES, SITE_URL } from "@/lib/seo";

// Solo páginas indexables reales. Las anclas de la portada (#quienes-somos,
// #beneficios, #como-funciona, #contacto) no son URLs propias y duplicaban la
// home; /servicios, /privacidad, /terminos y /aduanas estaban ausentes.
const PRIORITY: Record<string, number> = {
  "/": 1.0,
  "/servicios": 0.8,
  "/privacidad": 0.3,
  "/terminos": 0.3,
  "/aduanas": 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Sin lastModified: no hay fecha real de modificación por página que
  // reportar, y `new Date()` aquí solo fabricaría un timestamp de deploy sin
  // relación con cambios de contenido reales.
  return ALL_INDEXABLE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: PRIORITY[route],
  }));
}
