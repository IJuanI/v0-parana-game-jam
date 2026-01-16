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

export const metadata: Metadata = {
  title: "Paraná Game Jam 2026 | Global Game Jam",
  description:
    "Únete a la Paraná Game Jam 2026, parte del Global Game Jam. Del 30 de enero al 1 de febrero en Mirador TEC, Paraná. ¡Crea videojuegos en 48 horas!",
  icons: '/logos/logo.svg',
  keywords: ["game jam", "paraná", "global game jam", "videojuegos", "desarrollo de juegos", "entre ríos"],
  openGraph: {
    title: "Paraná Game Jam 2026",
    description: "Crea videojuegos en 48 horas. Del 30 de enero al 1 de febrero.",
    locale: "es_AR",
    type: "website",
    images: [{
      url: "/logos/logo.svg",
    }],
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0b1020",
  width: "device-width",
  initialScale: 1,
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
      </head>
      <body className={`${oxanium.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
