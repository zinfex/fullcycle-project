"use client"

import { Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"

interface DatePickerProps {
  placeholder: string
  value?: string
  onChange?: (value: string) => void
}

export function DatePicker({ placeholder, value, onChange }: DatePickerProps) {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="pl-3 pr-10 bg-navy-light border-navy-light text-gray-300"
      />
      <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}
