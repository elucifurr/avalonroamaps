import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RoaMaps - Roads of Avalon Explorer",
  description: "Browse and search for Roads of Avalon maps. Find resources, tiers, and locations for all RoA maps.",
  keywords: "Roads of Avalon, RoA maps, Avalon roads, fantasy maps, MMORPG maps",
  authors: [{ name: "RoaMaps" }],
  creator: "RoaMaps",
  publisher: "RoaMaps",
  applicationName: "RoaMaps",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://roamaps.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RoaMaps - Roads of Avalon Explorer",
    description: "Browse and search for Roads of Avalon maps. Find resources, tiers, and locations.",
    url: 'https://roamaps.vercel.app',
    siteName: "RoaMaps",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RoaMaps - Roads of Avalon Explorer",
    description: "Browse and search for Roads of Avalon maps",
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.svg',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'gaming',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}