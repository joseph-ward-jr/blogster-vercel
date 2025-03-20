import type { ReactNode } from "react"

type BlogHeaderProps = {
  title: string
  description?: string
  children?: ReactNode
}

export default function BlogHeader({ title, description, children }: BlogHeaderProps) {
  return (
    <div className="mb-12 border-b border-gray-200 pb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1A365D] mb-4">{title}</h1>
      {description && <p className="text-gray-600 text-lg mb-6">{description}</p>}
      {children}
    </div>
  )
}

