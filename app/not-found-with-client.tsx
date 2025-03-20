import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import NotFoundClient from "@/components/404/NotFoundClient"

export const metadata: Metadata = {
  title: "Page Not Found | Blogster",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      {/* Client component wrapped in Suspense */}
      <Suspense fallback={null}>
        <NotFoundClient />
      </Suspense>

      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist or has been moved.</p>

      <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
        Return Home
      </Link>
    </div>
  )
}

