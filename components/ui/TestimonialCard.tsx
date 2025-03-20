import { Card, CardHeader, CardContent, CardFooter, CardDescription, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  rating?: number
  className?: string
}

export default function TestimonialCard({ quote, name, role, rating = 5, className = "" }: TestimonialCardProps) {
  return (
    <Card className={`border border-gray-100 rounded-3xl shadow-sm ${className}`}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-gray-200 h-12 w-12"></div>
          <div>
            <CardTitle className="text-[#1A365D]">{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">"{quote}"</p>
      </CardContent>
      {rating > 0 && (
        <CardFooter>
          <div className="flex text-[#FF6F61]">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="fill-[#FF6F61]" />
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

