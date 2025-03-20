import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { Author } from "@/lib/blog-data"

type AuthorCardProps = {
  author: Author
  showBio?: boolean
}

export default function AuthorCard({ author, showBio = false }: AuthorCardProps) {
  // Check if author exists before trying to access its properties
  if (!author) {
    return null // Return null or a fallback UI if author is undefined
  }

  return (
    <Card className="border border-gray-100 rounded-3xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={author.avatar || "/placeholder.svg?height=50&width=50"} // Provide a default if avatar is missing
              alt={author.name || "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Link href={`/blog/author/${author.slug}`} className="font-medium text-[#1A365D] hover:text-[#FF6F61]">
              {author.name || "Unknown Author"}
            </Link>
            <p className="text-sm text-gray-500">{author.role || ""}</p>
          </div>
        </div>
        {showBio && author.bio && <p className="text-gray-600 mt-4">{author.bio}</p>}
      </CardContent>
    </Card>
  )
}

