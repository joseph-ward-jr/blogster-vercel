type SectionHeadingProps = {
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({ title, description, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1A365D]">{title}</h2>
      {description && (
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

