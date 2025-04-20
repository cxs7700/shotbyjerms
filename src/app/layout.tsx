import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JERMS | Photography Portfolio",
  description: "Photography portfolio showcasing artistic and creative work",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </NextThemesProvider>
      </body>
    </html>
  )
}
