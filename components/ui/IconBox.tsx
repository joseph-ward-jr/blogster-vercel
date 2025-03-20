import type { ReactNode } from "react"

type IconBoxProps = {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function IconBox({ icon, title, description, className = "" }: IconBoxProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="bg-[#FF6F61]/10 p-3 rounded-full w-fit mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#1A365D] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

