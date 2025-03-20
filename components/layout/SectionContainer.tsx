import type { ReactNode } from "react"

type SectionContainerProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: "section" | "div"
  containerClassName?: string
}

export default function SectionContainer({
  children,
  className = "",
  id,
  as: Component = "section",
  containerClassName = "",
}: SectionContainerProps) {
  return (
    <Component id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className={`container px-4 md:px-6 mx-auto ${containerClassName}`}>{children}</div>
    </Component>
  )
}

