import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

type PageLayoutProps = {
  children: ReactNode
  className?: string
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}

