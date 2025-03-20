import type { ReactNode } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <Card
      className={`border border-gray-100 hover:border-secondary transition-colors rounded-3xl shadow-sm hover:shadow-md ${className}`}
    >
      <CardHeader className="pb-2 pt-6">
        <div className="bg-gradient-primary-horizontal p-3 rounded-full w-fit mb-4 text-white">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </CardHeader>
      <CardContent className="pb-6">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

