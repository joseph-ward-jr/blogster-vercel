import type { ReactNode } from "react"
import SectionContainer from "@/components/layout/SectionContainer"
import SectionHeading from "@/components/ui/SectionHeading"

type TestimonialsSectionProps = {
  title: string
  description?: string
  children: ReactNode
  columns?: 2 | 3
  className?: string
}

export default function TestimonialsSection({
  title,
  description,
  children,
  columns = 3,
  className = "",
}: TestimonialsSectionProps) {
  const getColumnsClass = () => {
    switch (columns) {
      case 2:
        return "md:grid-cols-2"
      case 3:
        return "md:grid-cols-2 lg:grid-cols-3"
      default:
        return "md:grid-cols-2 lg:grid-cols-3"
    }
  }

  return (
    <SectionContainer className={className}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <SectionHeading title={title} description={description} />
      </div>
      <div className={`mx-auto grid max-w-5xl grid-cols-1 gap-8 ${getColumnsClass()} mt-16`}>{children}</div>
    </SectionContainer>
  )
}

