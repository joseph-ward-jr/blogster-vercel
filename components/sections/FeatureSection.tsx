import Image from "next/image"
import type { ReactNode } from "react"
import SectionContainer from "@/components/layout/SectionContainer"

type FeatureSectionProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
  children?: ReactNode
  className?: string
}

export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  children,
  className = "",
}: FeatureSectionProps) {
  return (
    <SectionContainer className={className}>
      <div className={`grid gap-8 items-center ${reversed ? "lg:grid-cols-[1fr,1.2fr]" : "lg:grid-cols-[1.2fr,1fr]"}`}>
        <div className={reversed ? "order-1 lg:order-2" : ""}>
          <h2 className="text-3xl font-bold tracking-tighter text-[#1A365D] mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          {children}
        </div>
        <div className={reversed ? "order-2 lg:order-1" : ""}>
          <div className="rounded-3xl overflow-hidden bg-gray-50 p-6 shadow-sm">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={600}
              height={400}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

