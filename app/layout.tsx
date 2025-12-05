import type React from "react"
import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Plaiground | AI Revenue Architecture for the Scaling Enterprise",
  description:
    "We don't bolt on AI — we re-engineer your core workflows to deliver $100K+ in cost savings and revenue growth, guaranteed.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${jakarta.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
