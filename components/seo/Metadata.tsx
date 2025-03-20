import type { Metadata } from "next"

type MetadataProps = {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  type?: "website" | "article"
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.jpg",
  canonical,
  type = "website",
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Blogster Team" }],
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      type,
      siteName: "Blogster",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical,
    },
    metadataBase: new URL("https://blogster.vercel.app"),
  }
}

// Also export as default for backward compatibility
export default constructMetadata

