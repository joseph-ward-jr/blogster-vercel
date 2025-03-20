import { Button } from "@/components/ui/button"
import SectionContainer from "@/components/layout/SectionContainer"

type CTASectionProps = {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  className?: string
  darkBackground?: boolean
}

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className = "",
  darkBackground = false,
}: CTASectionProps) {
  return (
    <div className={`${darkBackground ? "gradient-bg" : ""} ${className}`}>
      <SectionContainer>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${darkBackground ? "text-white" : "gradient-text"}`}
            >
              {title}
            </h2>
            <p
              className={`max-w-[900px] ${darkBackground ? "text-white/90" : "text-gray-600"} md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`}
            >
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
            <Button
              className={`${
                darkBackground
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-gradient-primary-horizontal text-white hover:opacity-90"
              } 
                px-8 rounded-full h-12`}
              asChild
            >
              <a href={primaryButtonHref}>{primaryButtonText}</a>
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                variant="outline"
                className={`${
                  darkBackground
                    ? "border-white text-white hover:bg-white/10"
                    : "border-primary text-primary hover:bg-primary-light"
                } 
                  rounded-full h-12`}
                asChild
              >
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}

