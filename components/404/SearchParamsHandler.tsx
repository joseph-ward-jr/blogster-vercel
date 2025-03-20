"use client"

import type React from "react"

import { useSearchParams } from "next/navigation"

interface SearchParamsHandlerProps {
  onParamsReady?: (params: URLSearchParams) => void
  children?: React.ReactNode
}

export default function SearchParamsHandler({ onParamsReady, children }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams()

  // If there's a callback to handle the params, call it
  if (onParamsReady) {
    onParamsReady(searchParams)
  }

  return <>{children}</>
}

