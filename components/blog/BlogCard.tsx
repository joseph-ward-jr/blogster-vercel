import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CalendarIcon, Clock, Tag } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/lib/blog-data"

type BlogCardProps = {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card
      className={`border border-gray-100 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-all ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`aspect-video relative overflow-hidden ${featured ? "aspect-[2/1]" : ""}`}>
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {post.category && (
          <Link
            href={`/blog/category/${post.category.slug}`}
            className="absolute top-4 left-4 bg-[#FF6F61] text-white px-3 py-1 text-xs font-medium rounded-full"
          >
            {post.category.name}
          </Link>
        )}
      </div>
      <CardContent className={`pt-6 ${featured ? "pb-4" : "pb-2"}`}>
        <div className="flex items-center text-sm text-gray-500 mb-2 gap-4">
          <div className="flex items-center gap-1">
            <CalendarIcon size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3
            className={`font-bold text-[#1A365D] hover:text-[#FF6F61] transition-colors ${featured ? "text-2xl mb-3" : "text-xl mb-2"}`}
          >
            {post.title}
          </h3>
        </Link>
        {featured && <p className="text-gray-600 mb-4">{post.excerpt}</p>}
      </CardContent>
      <CardFooter className="pt-0 pb-6">
        <div className="flex flex-wrap gap-2">
          {post.tags &&
            post.tags.slice(0, 3).map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-[#FF6F61]/10 hover:text-[#FF6F61] transition-colors"
              >
                <Tag size={12} />
                {tag.name}
              </Link>
            ))}
        </div>
      </CardFooter>
    </Card>
  )
}

