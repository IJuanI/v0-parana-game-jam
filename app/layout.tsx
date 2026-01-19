import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oxanium, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/google-analytics"
import "./globals.css"

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["400", "500", "600", "700", "800"],
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const siteUrl = "https://paranagamejam.com.ar"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paraná Game Jam 2026 | Global Game Jam Argentina",
    template: "%s | Paraná Game Jam 2026",
  },
  description:
    "Únete a la Paraná Game Jam 2026, sede oficial del Global Game Jam en Entre Ríos. Del 30 de enero al 1 de febrero en Mirador TEC, Paraná. Crea videojuegos en 48 horas con mentores profesionales, premios y una comunidad increíble.",
  icons: {
    icon: [
      { url: "/logos/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logos/logo.svg",
  },
  keywords: [
    "game jam",
    "paraná game jam",
    "global game jam",
    "global game jam argentina",
    "videojuegos",
    "desarrollo de juegos",
    "entre ríos",
    "paraná",
    "gamedev",
    "indie games",
    "game development",
    "hackathon de videojuegos",
    "crear videojuegos",
    "unity",
    "godot",
    "unreal engine",
  ],
  authors: [{ name: "Entre Ríos GameDevs", url: "https://ergd.ar" }],
  creator: "Entre Ríos GameDevs",
  publisher: "Paraná Game Jam",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Paraná Game Jam 2026 | Global Game Jam Argentina",
    description: "Crea videojuegos en 48 horas. Del 30 de enero al 1 de febrero en Mirador TEC, Paraná. ¡Inscribite ahora!",
    url: siteUrl,
    siteName: "Paraná Game Jam",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Paraná Game Jam 2026 - Global Game Jam Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paraná Game Jam 2026 | Global Game Jam Argentina",
    description: "Crea videojuegos en 48 horas. Del 30 de enero al 1 de febrero en Mirador TEC, Paraná.",
    images: ["/images/logo.png"],
    creator: "@ergd_ar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: "#0b1020",
  width: "device-width",
  initialScale: 1,
}

// JSON-LD structured data for the event
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Paraná Game Jam 2026",
  description:
    "Paraná Game Jam 2026 es la sede oficial del Global Game Jam en Entre Ríos, Argentina. Crea videojuegos en 48 horas junto a una comunidad apasionada.",
  startDate: "2026-01-30T18:00:00-03:00",
  endDate: "2026-02-01T18:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Mirador TEC",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paraná",
      addressRegion: "Entre Ríos",
      addressCountry: "AR",
    },
  },
  image: ["https://paranagamejam.com.ar/images/logo.png"],
  organizer: {
    "@type": "Organization",
    name: "Entre Ríos GameDevs",
    url: "https://ergd.ar",
  },
  offers: {
    "@type": "Offer",
    url: "https://paranagamejam.com.ar/registro",
    price: "0",
    priceCurrency: "ARS",
    availability: "https://schema.org/InStock",
    validFrom: "2025-12-01T00:00:00-03:00",
  },
  isAccessibleForFree: true,
  maximumAttendeeCapacity: 100,
  typicalAgeRange: "14+",
  inLanguage: "es",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${oxanium.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
