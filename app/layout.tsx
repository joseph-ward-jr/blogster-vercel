import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProviderWrapper from "@/components/theme/theme-provider-wrapper"
import GoogleAnalyticsWrapper from "@/components/analytics/GoogleAnalyticsWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Blogster | AI-Powered Content Creation Platform",
    template: "%s | Blogster",
  },
  description: "Transform your content strategy with AI-powered tools for better blog content creation.",
  keywords: "content creation, AI writing, blog platform, content strategy, blogging tools",
  authors: [{ name: "Blogster Team" }],
  creator: "Blogster",
  publisher: "Blogster",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogster.vercel.app",
    siteName: "Blogster",
    title: "Blogster | AI-Powered Content Creation Platform",
    description: "Transform your content strategy with AI-powered tools for better blog content creation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blogster - AI-Powered Content Creation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogster | AI-Powered Content Creation Platform",
    description: "Transform your content strategy with AI-powered tools for better blog content creation.",
    images: ["/og-image.jpg"],
    creator: "@blogster",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://blogster.vercel.app"),
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1A365D" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
          <GoogleAnalyticsWrapper measurementId="G-XXXXXXXXXX" />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}



import './globals.css'