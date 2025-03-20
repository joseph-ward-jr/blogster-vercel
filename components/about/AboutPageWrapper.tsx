"use client"

import { Suspense } from "react"
import AboutPage from "@/app/about/page"

export default function AboutPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPage />
    </Suspense>
  )
}

