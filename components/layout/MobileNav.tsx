"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import useMobileDetector from "@/hooks/use-mobile-detector"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobileDetector()

  if (!isMobile) return null

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center gap-6 p-4">
            <Link
              href="/features"
              className="text-lg font-medium text-[#1A365D] hover:text-[#FF6F61] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/testimonials"
              className="text-lg font-medium text-[#1A365D] hover:text-[#FF6F61] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-[#1A365D] hover:text-[#FF6F61] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-lg font-medium text-[#1A365D] hover:text-[#FF6F61] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-[#1A365D] hover:text-[#FF6F61] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-4 mt-4 w-full">
              <Button variant="ghost" className="w-full">
                Log in
              </Button>
              <Button className="w-full bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90">Sign up</Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

