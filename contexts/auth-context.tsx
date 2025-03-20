"use client"

import type React from "react"

import { createContext, useContext } from "react"
import type { Session, User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, name: string) => Promise<{ error: any; user: User | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
}

// Export AuthContext as a named export to fix the error
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Simplified implementation
  return (
    <AuthContext.Provider
      value={{
        user: null,
        session: null,
        isLoading: false,
        signIn: async () => ({ error: null }),
        signUp: async () => ({ error: null, user: null }),
        signOut: async () => {},
        resetPassword: async () => ({ error: null }),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

