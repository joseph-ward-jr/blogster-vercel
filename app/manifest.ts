import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blogster - AI-Powered Content Creation Platform",
    short_name: "Blogster",
    description: "Transform your content strategy with AI-powered tools for better blog content creation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1A365D",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

