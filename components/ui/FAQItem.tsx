"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItemProps = {
  question: string
  answer: string
  isOpen?: boolean
  className?: string
}

export default function FAQItem({ question, answer, isOpen = false, className = "" }: FAQItemProps) {
  const [expanded, setExpanded] = useState(isOpen)

  return (
    <div className={`border-b border-gray-200 py-4 ${className}`}>
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <h3 className="text-lg font-medium text-[#1A365D]">{question}</h3>
        <span className="ml-4 flex-shrink-0 text-[#FF6F61]">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {expanded && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

