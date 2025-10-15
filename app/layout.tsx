import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { Poppins, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Fundación Yo Elijo Ayudar | Coronel Oviedo, Paraguay",
  description:
    "Transformamos vidas a través de la solidaridad, el amor y el compromiso con nuestra comunidad. Hogar de Niños Divina Misericordia.",
  keywords: "fundación, ayuda social, niños, Paraguay, Coronel Oviedo, donaciones, voluntariado, ONG",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
