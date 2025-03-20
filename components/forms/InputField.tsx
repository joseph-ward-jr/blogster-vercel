import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type InputFieldProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  className?: string
  error?: string
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
  className = "",
  error,
}: InputFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`rounded-xl ${error ? "border-red-500" : ""}`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

