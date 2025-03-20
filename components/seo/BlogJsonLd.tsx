import { blogPosts, authors } from "@/lib/blog-data"

type BlogJsonLdProps = {
  slug: string
}

export default function BlogJsonLd({ slug }: BlogJsonLdProps) {
  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) return null

  const authorData = post.author ? authors.find((a) => a.slug === post.author?.slug) : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: authorData
      ? {
          "@type": "Person",
          name: authorData.name,
          url: `https://blogster.vercel.app/blog/author/${authorData.slug}`,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Blogster",
      logo: {
        "@type": "ImageObject",
        url: "https://blogster.vercel.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blogster.vercel.app/blog/${post.slug}`,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}

