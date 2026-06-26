"use client"

import type { ReactNode } from "react"
import { OrganicButton } from "@/components/ui/organic-button"

interface PageTemplateProps {
  children: ReactNode
  headerTitle: string
  headerSubtitle?: string
  headerLabel?: string
  headerImage?: string
  footerTitle?: string
  footerDescription?: string
  footerCtaText?: string
  footerCtaHref?: string
  variant?: "seafoam" | "ocean" | "mist"
}

export function PageTemplate({
  children,
  headerTitle,
  headerSubtitle,
  headerLabel,
  headerImage,
  footerTitle = "Ready to Transform Your Business?",
  footerDescription = "Let's chart a course toward sustainable success together.",
  footerCtaText = "Get in Touch",
  footerCtaHref = "/contact",
  variant = "seafoam",
}: PageTemplateProps) {
  const bgColors = {
    seafoam: "bg-seafoam",
    ocean: "bg-ocean",
    mist: "bg-mist",
  }

  const textColors = {
    seafoam: "text-deep-ocean",
    ocean: "text-white",
    mist: "text-deep-ocean",
  }

  const accentColors = {
    seafoam: "bg-deep-ocean/10",
    ocean: "bg-white/10",
    mist: "bg-deep-ocean/10",
  }

  const dividerColors = {
    seafoam: "bg-deep-ocean/30",
    ocean: "bg-white/30",
    mist: "bg-deep-ocean/30",
  }

  return (
    <>
      {/* Header Section */}
      <section className={`${bgColors[variant]} py-24 lg:py-32 relative overflow-hidden`}>
        <div
          className={`absolute top-10 -right-20 w-80 h-80 ${accentColors[variant]} blur-3xl rounded-[50px_10px_50px_50px]`}
          aria-hidden="true"
        />
        <div
          className={`absolute -bottom-20 -left-10 w-64 h-64 ${accentColors[variant]} blur-3xl rounded-[50px_10px_50px_50px]`}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          {headerLabel && (
            <div className="mb-12">
              <p
                className={`text-sm ${textColors[variant]} opacity-60 tracking-wide mb-3`}
                style={{ fontFamily: "var(--font-geom)" }}
              >
                {headerLabel}
              </p>
              <div className={`w-20 h-px ${dividerColors[variant]}`} />
            </div>
          )}

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left: Content - spans 3 columns */}
            <div className="lg:col-span-3 order-1">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight ${textColors[variant]} mb-6`}
                style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
              >
                {headerTitle}{" "}
                <span
                  className={`inline-block w-8 h-8 lg:w-10 lg:h-10 ${
                    variant === "ocean" ? "bg-seafoam/30" : "bg-primary-teal/30"
                  }`}
                  style={{ borderRadius: "50px 10px 50px 50px" }}
                  aria-hidden="true"
                />
              </h1>

              {headerSubtitle && (
                <p
                  className={`text-lg lg:text-xl ${textColors[variant]} opacity-80 leading-relaxed max-w-2xl`}
                  style={{ fontFamily: "var(--font-geom)" }}
                >
                  {headerSubtitle}
                </p>
              )}
            </div>

            {/* Right: Style-M shaped image - spans 2 columns */}
            <div className="lg:col-span-2 order-2">
              <div className="overflow-hidden relative rounded-[50px_10px_50px_50px] aspect-[4/3]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20December%2012%2C%202025%20-%2011_05AM-nGGMCmqf8F1eno251GbXMxSE8WDmAF.jpeg"
                  alt={headerTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div>{children}</div>

      {/* Footer CTA Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left: Content */}
            <div className="lg:max-w-2xl">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep-ocean mb-4"
                style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
              >
                {footerTitle}
              </h2>

              <p className="text-lg text-deep-ocean/70 leading-relaxed" style={{ fontFamily: "var(--font-geom)" }}>
                {footerDescription}
              </p>
            </div>

            {/* Right: CTA Button */}
            <div className="flex-shrink-0">
              <OrganicButton href={footerCtaHref} variant="primary" size="lg">
                {footerCtaText}
              </OrganicButton>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white pb-8">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12"></div>
      </div>
    </>
  )
}
