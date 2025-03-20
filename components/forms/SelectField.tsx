import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

type Option = {
  value: string
  label: string
}

type SelectFieldProps = {
  label: string
  name: string
  options: Option[]
  placeholder?: string
  required?: boolean
  className?: string
  error?: string
}

export default function SelectField({
  label,
  name,
  options,
  placeholder = "Select an option",
  required = false,
  className = "",
  error,
}: SelectFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Select name={name}>
        <SelectTrigger id={name} className={`rounded-xl ${error ? "border-red-500" : ""}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

