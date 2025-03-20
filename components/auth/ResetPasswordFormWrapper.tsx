"use client"

import { Suspense } from "react"
import ResetPasswordForm from "./reset-password-form"

export default function ResetPasswordFormWrapper({ token }: { token?: string }) {
  return (
    <Suspense fallback={<div>Loading reset password form...</div>}>
      <ResetPasswordForm token={token} />
    </Suspense>
  )
}

