import type { Metadata } from "next"
import { blogPosts } from "@/lib/blog-data"
import { constructMetadata } from "@/components/seo/Metadata"
import BlogLayout from "@/components/blog/BlogLayout"
import BlogHeader from "@/components/blog/BlogHeader"
import AuthorCard from "@/components/blog/AuthorCard"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return constructMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    })
  }

  return constructMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags?.map((tag) => tag.name) || [],
    ogImage: post.coverImage,
    type: "article",
    canonical: `https://blogster.vercel.app/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        <BlogHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          tags={post.tags}
        />

        <div className="prose dark:prose-invert lg:prose-lg mx-auto mt-10">
          <div dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
        </div>

        {post.author && (
          <div className="mt-16">
            <AuthorCard author={post.author} />
          </div>
        )}
      </article>
    </BlogLayout>
  )
}

