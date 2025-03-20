"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import InputField from "./InputField"
import TextareaField from "./TextareaField"
import SelectField from "./SelectField"

type ContactFormProps = {
  className?: string
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 1500)
  }

  const subjectOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing Question" },
    { value: "partnership", label: "Partnership Opportunity" },
  ]

  if (formSubmitted) {
    return (
      <div className={`bg-green-50 p-6 rounded-3xl text-center ${className}`}>
        <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
        <p className="text-green-600 mb-4">Thank you for reaching out. We'll get back to you as soon as possible.</p>
        <Button onClick={() => setFormSubmitted(false)} variant="outline" className="rounded-full">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Name" name="name" placeholder="Your name" required />
        <InputField label="Email" name="email" type="email" placeholder="your.email@example.com" required />
      </div>
      <SelectField label="Subject" name="subject" options={subjectOptions} required />
      <TextareaField label="Message" name="message" placeholder="How can we help you?" required rows={5} />
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FF6F61] text-white hover:bg-[#FF6F61]/90 rounded-full px-8 h-12"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}

