import type { ReactNode } from "react"
import SectionContainer from "@/components/layout/SectionContainer"
import SectionHeading from "@/components/ui/SectionHeading"

type FAQSectionProps = {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export default function FAQSection({ title, description, children, className = "" }: FAQSectionProps) {
  return (
    <SectionContainer className={className}>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <SectionHeading title={title} description={description} />
      </div>
      <div className="max-w-3xl mx-auto">{children}</div>
    </SectionContainer>
  )
}

