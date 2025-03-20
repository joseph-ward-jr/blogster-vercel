import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"
import type { CookieOptions } from "@supabase/ssr"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  // Create a Supabase client configured to use cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options?: CookieOptions }[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options)
          })
        },
      } as any,
    }
  )

  // Refresh session if expired - required for Server Components
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/profile", "/settings"]

  // Check if the route is protected and user is not authenticated
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))

  if (isProtectedRoute && !session) {
    // Redirect to login page if trying to access protected route without authentication
    const redirectUrl = new URL("/auth/login", req.url)
    redirectUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Auth routes that should redirect to dashboard if already authenticated
  const authRoutes = ["/auth/login", "/auth/signup", "/auth/forgot-password"]

  if (authRoutes.includes(pathname) && session) {
    // Redirect to dashboard if already authenticated
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return res
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*", "/auth/:path*"],
}

