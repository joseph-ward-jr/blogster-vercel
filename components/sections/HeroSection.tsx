import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionContainer from "@/components/layout/SectionContainer"

type HeroSectionProps = {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  imageSrc?: string
  imageAlt?: string
  className?: string
}

export default function HeroSection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  imageSrc = "/placeholder.svg?height=450&width=450",
  imageAlt = "Hero Image",
  className = "",
}: HeroSectionProps) {
  return (
    <div className="gradient-bg py-16 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white opacity-10"></div>

      <SectionContainer className={`relative z-10 ${className}`}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">{description}</p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 rounded-full h-12" asChild>
                <a href={primaryButtonHref}>{primaryButtonText}</a>
              </Button>
              {secondaryButtonText && secondaryButtonHref && (
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full h-12"
                  asChild
                >
                  <a href={secondaryButtonHref}>{secondaryButtonText}</a>
                </Button>
              )}
            </div>

            {/* Stats to reinforce value proposition */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20 mt-6">
              <div className="text-center">
                <p className="text-white text-2xl font-bold">2,000+</p>
                <p className="text-white/80 text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-white text-2xl font-bold">50,000+</p>
                <p className="text-white/80 text-sm">Articles Created</p>
              </div>
              <div className="text-center">
                <p className="text-white text-2xl font-bold">4.9/5</p>
                <p className="text-white/80 text-sm">User Rating</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-3xl overflow-hidden bg-white/10 p-6 backdrop-blur-sm">
              <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

