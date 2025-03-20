"use client"

import { useSearchParams } from "next/navigation"

export default function NotFoundClient() {
  const searchParams = useSearchParams()

  // Any client-side logic using searchParams can go here
  // For now, this component doesn't render anything

  return null
}

