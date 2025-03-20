import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NewsletterSignup from "./NewsletterSignup"
import { categories, tags } from "@/lib/blog-data"

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      <NewsletterSignup />

      <Card className="border border-gray-100 rounded-3xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#1A365D]">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="text-gray-600 hover:text-[#FF6F61] transition-colors"
                >
                  {category.name} ({category.count})
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="border border-gray-100 rounded-3xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#1A365D]">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#FF6F61]/10 hover:text-[#FF6F61] transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border border-gray-100 rounded-3xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-[#1A365D]">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <Link
                href="/blog/ai-content-creation-best-practices"
                className="text-gray-600 hover:text-[#FF6F61] transition-colors"
              >
                AI Content Creation: Best Practices for 2023
              </Link>
            </li>
            <li>
              <Link
                href="/blog/how-to-create-effective-audience-personas"
                className="text-gray-600 hover:text-[#FF6F61] transition-colors"
              >
                How to Create Effective Audience Personas
              </Link>
            </li>
            <li>
              <Link
                href="/blog/content-strategy-guide"
                className="text-gray-600 hover:text-[#FF6F61] transition-colors"
              >
                The Ultimate Content Strategy Guide
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

