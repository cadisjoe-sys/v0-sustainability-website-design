"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { OrganicButton } from "@/components/ui/organic-button"
import { Mail, SendDiagonal, CheckCircle, WarningCircle, NavArrowDown } from "iconoir-react"

const companySizes = [
  { value: "", label: "Select company size" },
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
]

const industries = [
  { value: "", label: "Select your industry" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail & Consumer Goods" },
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance & Banking" },
  { value: "healthcare", label: "Healthcare" },
  { value: "energy", label: "Energy & Utilities" },
  { value: "real-estate", label: "Real Estate & Construction" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "education", label: "Education" },
  { value: "nonprofit", label: "Non-profit" },
  { value: "government", label: "Government" },
  { value: "other", label: "Other" },
]

const hearAboutUs = [
  { value: "", label: "How did you hear about us?" },
  { value: "search", label: "Search Engine (Google, Bing)" },
  { value: "social", label: "Social Media" },
  { value: "referral", label: "Referral / Word of Mouth" },
  { value: "event", label: "Conference / Event" },
  { value: "article", label: "Article / Publication" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "other", label: "Other" },
]

function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
  required?: boolean
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none bg-mist border border-cloud focus:border-ocean focus:ring-ocean rounded-[20px_5px_20px_20px] px-4 py-3 pr-10 text-deep-ocean font-sans text-sm cursor-pointer transition-colors hover:border-ocean/50"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <NavArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ocean pointer-events-none" />
    </div>
  )
}

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companySize: "",
    industry: "",
    hearAboutUs: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value
    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }))
  }

  if (formState === "success") {
    return (
      <section className="py-20 lg:py-28 bg-mist">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <Card className="bg-white border-none shadow-lg rounded-[50px_10px_50px_50px]">
            <CardContent className="p-8 lg:p-12 text-center">
              <div
                className="flex items-center justify-center w-16 h-16 bg-seafoam/20 mx-auto mb-6"
                style={{ borderRadius: "30px 5px 30px 30px" }}
              >
                <CheckCircle className="h-8 w-8 text-primary-teal" />
              </div>
              <h2 className="text-2xl text-deep-ocean mb-4" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                Thank You!
              </h2>
              <p className="text-stone leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                Your message has been sent successfully. We&apos;ll review your information and be in touch soon.
              </p>
              <div className="mt-6 flex justify-center">
                <OrganicButton
                  onClick={() => {
                    setFormState("idle")
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      company: "",
                      companySize: "",
                      industry: "",
                      hearAboutUs: "",
                      message: "",
                    })
                  }}
                  variant="secondary"
                  size="default"
                >
                  Send Another Message
                </OrganicButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-28 bg-mist">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-seafoam/30 flex-shrink-0"
                  style={{ borderRadius: "20px 5px 20px 20px" }}
                >
                  <Mail className="h-6 w-6 text-deep-ocean" />
                </div>
                <div>
                  <h3
                    className="text-sm text-deep-ocean mb-1"
                    style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:hello@smoothsailingsustainability.com"
                    className="text-ocean hover:text-primary-teal transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    hello@smoothsailingsustainability.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="bg-white border-none rounded-[50px_10px_50px_50px] overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState === "error" && (
                    <div
                      className="flex items-center gap-3 bg-red-50 text-red-700 p-4"
                      style={{ borderRadius: "20px 5px 20px 20px" }}
                    >
                      <WarningCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  {/* Section: Your details */}
                  <div>
                    {/* Name fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-sm text-deep-ocean"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="bg-mist border-cloud focus:border-ocean focus:ring-ocean rounded-[20px_5px_20px_20px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-sm text-deep-ocean"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="bg-mist border-cloud focus:border-ocean focus:ring-ocean rounded-[20px_5px_20px_20px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm text-deep-ocean"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-mist border-cloud focus:border-ocean focus:ring-ocean rounded-[20px_5px_20px_20px]"
                        style={{ fontFamily: "var(--font-sans)" }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Section: Company */}
                  <div>
                    {/* Company */}
                    <div className="space-y-2 mb-4">
                      <Label
                        htmlFor="company"
                        className="text-sm text-deep-ocean"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Company Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-mist border-cloud focus:border-ocean focus:ring-ocean rounded-[20px_5px_20px_20px]"
                        style={{ fontFamily: "var(--font-sans)" }}
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Industry and Company Size dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="industry"
                          className="text-sm text-deep-ocean"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Industry <span className="text-stone text-xs">(optional)</span>
                        </Label>
                        <CustomSelect
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          options={industries}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="companySize"
                          className="text-sm text-deep-ocean"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          Company Size <span className="text-stone text-xs">(optional)</span>
                        </Label>
                        <CustomSelect
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          options={companySizes}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section: Message */}
                  <div>
                    {/* How did you hear about us */}
                    <div className="space-y-2 mb-4">
                      <Label
                        htmlFor="hearAboutUs"
                        className="text-sm text-deep-ocean"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        How did you hear about us? <span className="text-stone text-xs">(optional)</span>
                      </Label>
                      <CustomSelect
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleChange}
                        options={hearAboutUs}
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2 mb-4">
                      <Label
                        htmlFor="message"
                        className="text-sm text-deep-ocean"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-mist border-cloud focus:border-ocean focus:ring-ocean rounded-[20px_5px_20px_20px] resize-none"
                        style={{ fontFamily: "var(--font-sans)" }}
                        placeholder="Would you like a consultation? Are you seeking a partnership? Tell us how we can help."
                      />
                    </div>

                  </div>

                  <OrganicButton
                    type="submit"
                    disabled={formState === "submitting"}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <SendDiagonal className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </OrganicButton>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
