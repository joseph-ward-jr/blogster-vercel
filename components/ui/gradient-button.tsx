import { type ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
          variant === "default"
            ? "bg-gradient-primary-horizontal text-white hover:opacity-90"
            : "border-2 border-transparent relative before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-primary-horizontal before:-m-0.5 text-gray-800 hover:text-primary",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 px-3 text-sm",
          size === "lg" && "h-12 px-8 text-lg",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton }

