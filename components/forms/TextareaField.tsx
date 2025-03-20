import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type TextareaFieldProps = {
  label: string
  name: string
  placeholder?: string
  required?: boolean
  rows?: number
  className?: string
  error?: string
}

export default function TextareaField({
  label,
  name,
  placeholder = "",
  required = false,
  rows = 4,
  className = "",
  error,
}: TextareaFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`rounded-xl ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

