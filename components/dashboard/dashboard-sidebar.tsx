"use client"

import Link from "next/link"

// Export DashboardSidebar as a default export to fix the error
export default function DashboardSidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen">
      <div className="p-4">
        <Link href="/" className="text-xl font-bold">
          Blogster
        </Link>
      </div>
      <nav className="p-4">
        <ul>
          <li>
            <Link href="/dashboard" className="block py-2">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/posts" className="block py-2">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="block py-2">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

