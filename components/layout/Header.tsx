import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "./MobileNav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Blogster
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
            Features
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors"
          >
            Testimonials
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-gray-700 hover:text-secondary hover:bg-secondary-light rounded-full">
            Log in
          </Button>
          <Button className="bg-gradient-primary-horizontal text-white hover:opacity-90 rounded-full px-6">
            Sign up free
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

