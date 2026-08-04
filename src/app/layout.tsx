// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "@/components/hooks/NavbarDesktop";
import NavbarMobile from "@/components/hooks/NavbarMobile";
import Footer from "@/components/Footer";
import Script from "next/script";
import Analytics from "@/components/Analytics";
import { Suspense } from "react";
import { regionalAlternates, regionalOpenGraph } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lem-box.com.uy"),
  title: {
    default: "LEM-BOX — Logística Miami ↔ Uruguay",
    template: "%s | LEM-BOX Uruguay",
  },
  description:
    "Comprás en EE.UU. y recibís en Uruguay. Recepción y consolidación con fotos. Salidas semanales desde Miami.",
  alternates: regionalAlternates("/"),
  themeColor: "#02120F",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#02120F" },
    ],
  },
  openGraph: {
    ...regionalOpenGraph("/"),
    title: "LEM-BOX Uruguay — Envíos rápidos desde Miami",
    description:
      "Comprás en EE.UU. y recibís en Uruguay. Recepción y consolidación con fotos. Salidas semanales desde Miami.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEM-BOX Uruguay — Envíos rápidos desde Miami",
    description:
      "Comprás en EE.UU. y recibís en Uruguay. Recepción y consolidación con fotos. Salidas semanales desde Miami.",
    images: ["/og-lem-box-uy.jpg?v=3"],
  },
};

function Header() {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <>
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { anonymize_ip: true });
                `}
              </Script>
              <Suspense fallback={null}>
                <Analytics />
              </Suspense>
            </>
          )}
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
