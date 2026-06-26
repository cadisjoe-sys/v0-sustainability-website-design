import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"

const geom = localFont({
  src: "../public/fonts/Geom-VariableFont_wght.ttf",
  variable: "--font-geom",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Smoothsailing Sustainability | Navigating Your Success Sustainably",
  description:
    "Guiding organizations to flourish with planet-positive strategies that nourish people, nature, and business.",
  generator: "v0.app",
  keywords: ["sustainability", "ESG", "B Corp", "environmental consulting", "corporate sustainability"],
}

export const viewport: Viewport = {
  themeColor: "#1A5A5A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geom.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  )
}
