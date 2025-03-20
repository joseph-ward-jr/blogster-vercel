import ResetPasswordFormWrapper from "@/components/auth/ResetPasswordFormWrapper"

export default function ResetPasswordPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Reset Your Password</h1>
        <ResetPasswordFormWrapper />
      </div>
    </div>
  )
}

