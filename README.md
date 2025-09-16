# 🛫 LEM-BOX V2 📦

Proyecto de la nueva web de **LEM-BOX** desarrollado con **Next.js (App Router)**, **TypeScript** y **TailwindCSS**, con enfoque **mobile-first** y branding oscuro (#005F40 / #EB6619).

---

## 🌐 Multipaís

- **lem-box.com**: Selector de país para redirigir a las versiones locales.  
- **lem-box.com.uy**: Versión terminada, con contenido y diseño adaptados para Uruguay.  
- **lem-box.com.ar**: Versión pendiente, similar a la de Uruguay pero con cambios en textos y ajustes específicos para Argentina.

---

## 🚀 Estado actual

- **Header (desktop + mobile)**  
  - Glassmorphism (`bg-[#005f40]/10 + backdrop-blur`)  
  - Menú mobile en portal con overlay dinámico, cierre por ESC y focus return  
  - Scroll-shrink y scroll-spy implementados  

- **Hero**  
  - 100dvh, fondo dinámico, overlay/fade inferior  
  - CTA principal a registro (`https://lem-box.com/Tracking/web/#/register`)  
  - Micro-animación en el indicador de scroll  

- **Sección “Quiénes somos”**  
  - Fondo verde oscuro (#02120F)  
  - Texto reescrito y bullets claros  
  - Imagen/logo metálico en PNG para máxima calidad  

- **Sección “Beneficios”**  
  - Grid 3×2 con 6 beneficios  
  - Cards con imágenes generadas en SORA (WebP optimizadas)  
  - Hover lift + shadow premium Apple-like  
  - Etiqueta superior “Beneficios” estilizada, H2 consistente  

---

## 🛠️ Stack

- [Next.js 15 (App Router)](https://nextjs.org)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com)  
- [next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images) para optimización de imágenes  
- [Cloudinary](https://cloudinary.com) para media estática (próximamente)  

---

## ▶️ Desarrollo

Correr en local:

```bash
npm run dev
# o
yarn dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## 🌍 Próximos pasos

- Pulir sección **Cómo funciona** con estilo consistente a Beneficios  
- Crear página **/servicios** con cards y descripciones  
- Integrar **tracking público** y base de datos (Supabase/Postgres)  
- Integrar automatizaciones vía **n8n**  
- Desarrollar estructura multipaís:  
  - Implementar selector de país en **lem-box.com**  
  - Finalizar versión **.ar**, basada en la versión **.uy** con ajustes de textos y contenido local  

---

## 📌 Notas

Este README se irá actualizando con cada fase del proyecto.

---

## 📝 Desarrollo

El proyecto LEM-BOX V2 está diseñado con un enfoque mobile-first, utilizando Next.js 15 con App Router, TypeScript y TailwindCSS para mantener un código moderno, escalable y optimizado. Se ha implementado un branding oscuro con colores clave: verde oscuro (#02120F) para fondos y naranja vibrante (#EB6619) para acentos y llamadas a la acción.

Se ha completado el diseño y desarrollo de:

- Header con glassmorphism, menú mobile accesible y comportamiento avanzado (overlay, cierre por ESC, focus return).  
- Hero full viewport con fondo dinámico y microanimación para guiar al usuario.  
- Sección “Quiénes somos” con contenido claro y diseño visualmente atractivo, incluyendo imágenes metálicas en PNG para alta calidad.  
- Sección “Beneficios” con grid 3x2, cards con imágenes optimizadas y efectos premium en hover.  

En progreso y próximos desarrollos:

- Sección “Cómo funciona” con estilo coherente a Beneficios.  
- Página de servicios con cards y descripciones.  
- Integración de tracking público y base de datos con Supabase/Postgres para análisis y gestión de usuarios.  
- Automatizaciones vía n8n para optimizar flujos internos.  
- Arquitectura multipaís, con selector en lem-box.com y versiones locales para Uruguay (.uy) y Argentina (.ar), adaptando contenido y textos según mercado.  

Las directrices de diseño mantienen la coherencia visual con un branding oscuro, priorizando la usabilidad y experiencia móvil, con detalles gráficos y microinteracciones que aportan dinamismo y profesionalismo.

Este documento se actualizará conforme avance el desarrollo y se implementen nuevas funcionalidades y mejoras.
