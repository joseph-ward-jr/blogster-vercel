import type { ReactNode } from "react"
import PageLayout from "@/components/layout/PageLayout"
import BlogSidebar from "./BlogSidebar"

type BlogLayoutProps = {
  children: ReactNode
  showSidebar?: boolean
}

export default function BlogLayout({ children, showSidebar = true }: BlogLayoutProps) {
  return (
    <PageLayout>
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">{children}</div>
          {showSidebar && (
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}

