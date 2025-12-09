// src/lib/content.ts

import type { Country } from "./country";
export type Step = { title: string; description: string; step?: number; icon?: string };
export type BenefitItem = { title: string; description: string; icon?: string };
export type FAQItem = { q: string; a: string };

export const siteContentByCountry = {
  uy: {
    about: {
      title: "Quiénes somos",
      subtitle: "Somos operador logístico desde Miami → Uruguay para envíos personales bajo normativa aduanera vigente.",
      body: [
        "Recepción y consolidación en Miami con casillero exclusivo para cada cliente.",
        "Salidas aéreas semanales a Montevideo, siempre dentro de los límites de franquicia y regímenes permitidos por Aduanas Uruguay.",
      ],
    },
    benefits: [
      {
        title: "Cumplimiento aduanero claro",
        description:
          "Operamos bajo el régimen de franquicia personal y régimen simplificado, para que tus compras lleguen cumpliendo las normas de Aduanas Uruguay.",
        icon: "shield",
      },
      {
        title: "Envíos rápidos y seguros",
        description:
          "Consolidación inteligente + tracking en tiempo real, optimizando tiempos sin salirnos de los límites legales de valor, peso y tipo de mercadería.",
        icon: "truck",
      },
      {
        title: "Envío aéreo semanal",
        description:
          "Vuelos semanales desde Miami con cut-offs claros y comunicación transparente sobre el estado aduanero de tus envíos.",
        icon: "plane",
      },
      {
        title: "Cuidado del paquete",
        description:
          "Reempaque y refuerzo especial para envíos frágiles o de alto valor, reduciendo riesgos durante el traslado internacional.",
        icon: "box",
      },
      {
        title: "Logística para terceros",
        description:
          "Fulfillment y preparación de pedidos para sellers de e-commerce en EE.UU., integrando almacenamiento, packing y despacho internacional.",
        icon: "warehouse",
      },
      {
        title: "Atención directa",
        description:
          "Atención directa por WhatsApp y correo para consultas sobre qué podés enviar, disponibilidad de franquicia y requisitos de Aduanas.",
        icon: "message-circle",
      },
    ],
    process: [
      {
        step: 1,
        title: "Creás tu cuenta y casillero",
        description:
          "Te registrás, validamos tus datos y te asignamos tu dirección en Miami para recibir tus compras online.",
        icon: "user-plus",
      },
      {
        step: 2,
        title: "Recepción, fotos y consolidación",
        description:
          "Recibimos tus paquetes, sacamos fotos, verificamos peso y tipo de producto, y los consolidamos respetando los límites de franquicia (valor y peso).",
        icon: "box",
      },
      {
        step: 3,
        title: "Despacho y control aduanero",
        description:
          "Preparamos la documentación y embarcamos en nuestros vuelos semanales a Montevideo, aplicando franquicia personal o régimen simplificado según corresponda.",
        icon: "plane",
      },
      {
        step: 4,
        title: "Liberación y entrega en Uruguay",
        description:
          "Una vez que Aduanas libera el envío, coordinamos la entrega en tu domicilio o punto de retiro en Uruguay.",
        icon: "home",
      },
    ],
    faqs: [
      {
        q: "¿Cuántos envíos puedo recibir sin pagar impuestos?",
        a: "La normativa uruguaya permite hasta 3 envíos anuales por persona bajo franquicia personal, siempre que cada envío cumpla con los límites de valor, peso y uso personal. A partir del 4.º envío o si ya usaste tus franquicias, pueden aplicarse tributos bajo régimen simplificado o general.",
      },
      {
        q: "¿Cuál es el valor y peso máximo de cada envío?",
        a: "Para ampararse a la franquicia, cada envío debe ser de uso personal, pesar hasta 20 kg y tener un valor de hasta USD 200 (solo mercadería, sin incluir flete). Si el envío supera ese valor, puede pasar a régimen simplificado (60% hasta USD 200) o régimen general según corresponda.",
      },
      {
        q: "¿Qué tipo de productos puedo enviar?",
        a: "Podés traer ropa, calzado, accesorios, libros, electrónica de consumo, repuestos no prohibidos, artículos para el hogar y otros bienes de uso personal en cantidades razonables. Siempre evaluamos cada caso según normativa aduanera para evitarte problemas en Aduanas.",
      },
      {
        q: "¿Qué productos no puedo enviar con LEM-BOX?",
        a: "No podemos transportar mercadería prohibida ni gravada por IMESI: armas, municiones, explosivos, drogas, productos químicos peligrosos, cigarrillos electrónicos, tabaco, bebidas alcohólicas, refrescos, perfumes y cosméticos, combustibles, neumáticos, dinero en efectivo y otros productos restringidos por la normativa vigente.",
      },
      {
        q: "¿Quién gestiona permisos especiales (MSP, URSEC, etc.)?",
        a: "Algunos productos requieren autorizaciones previas (por ejemplo, medicamentos ante el MSP o dispositivos con radiofrecuencia ante URSEC). Te avisamos cuando detectamos estos casos, pero el trámite y la obtención del permiso corresponden al destinatario. Sin esos permisos, Aduanas puede retener o no liberar el envío.",
      },
      {
        q: "¿Cuánto tarda el envío desde Miami a Uruguay?",
        a: "Nuestros envíos aéreos salen semanalmente desde Miami. Una vez embarcado, el tránsito hasta Montevideo suele demorar alrededor de 7 días, sujeto a los tiempos de revisión y liberación de Aduanas Uruguay.",
      },
      {
        q: "¿Puedo rastrear mi paquete?",
        a: "Sí. Compartimos tracking y actualizaciones de estado en cada etapa: recepción en Miami, consolidación, salida del vuelo y liberación en Uruguay.",
      },
    ],
  },
  ar: {
    about: {
      title: "Quiénes somos",
      subtitle: "Somos operador logístico desde Miami → Argentina.",
      body: [
        "Recepción y consolidación en Miami.",
        "Salidas aéreas semanales a Buenos Aires.",
      ],
    },
    benefits: [
      {
        title: "Envíos rápidos y seguros",
        description: "Consolidación inteligente + tracking en tiempo real para entregas rápidas y seguras.",
        icon: "truck",
      },
      {
        title: "Envío aéreo semanal",
        description: "Dos vuelos semanales desde Miami con cut-offs claros, para cumplir plazos reales.",
        icon: "plane",
      },
      {
        title: "Cuidado del paquete",
        description: "Reempaque y refuerzo especial para envíos frágiles o de alto valor.",
        icon: "shield",
      },
      {
        title: "Logística para terceros",
        description: "Fulfillment y preparación de pedidos para sellers de e-commerce en EE.UU.",
        icon: "warehouse",
      },
      {
        title: "Atención directa",
        description: "Atención directa por WhatsApp y correo, sin intermediarios.",
        icon: "message-circle",
      },
      {
        title: "Casillero privado en Miami",
        description: "Cada cliente tiene una dirección exclusiva en Miami con fotos al recibir la carga para mayor control y transparencia.",
        icon: "package",
      },
    ],
    process: [
      {
        step: 1,
        title: "Registro y creación de cuenta",
        description: "Crea tu cuenta para empezar a enviar paquetes desde Miami a Argentina.",
        icon: "user-plus",
      },
      {
        step: 2,
        title: "Recepción y consolidación",
        description: "Recibimos tus paquetes en Miami y los consolidamos para optimizar el envío.",
        icon: "box",
      },
      {
        step: 3,
        title: "Envío aéreo semanal",
        description: "Realizamos envíos a Buenos Aires cada semana para garantizar rapidez.",
        icon: "plane",
      },
      {
        step: 4,
        title: "Entrega en destino",
        description: "Recibe tus paquetes en la dirección que elijas en Argentina.",
        icon: "home",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda el envío?",
        a: "El envío tarda aproximadamente 7 días desde Miami hasta Buenos Aires.",
      },
      {
        q: "¿Puedo rastrear mi paquete?",
        a: "Sí, ofrecemos seguimiento en tiempo real para todos los envíos.",
      },
      {
        q: "¿Qué tipo de productos puedo enviar?",
        a: "Aceptamos la mayoría de productos, excepto aquellos prohibidos por la ley.",
      },
    ],
  },
} as const;

export const getContent = (c: Country) => siteContentByCountry[c];