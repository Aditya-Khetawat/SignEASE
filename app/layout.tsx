import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SignEASE - Bridging Speech and Sign Language",
  description:
    "SignEASE helps break communication barriers between the hearing and deaf communities through innovative technology and services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'