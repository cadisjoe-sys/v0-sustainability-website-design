"use client"

import Link from "next/link"
import { ArrowRight, Page, LightBulb, BookStack } from "iconoir-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { OrganicButton } from "@/components/ui/organic-button"

const components = [
  {
    title: "Case Studies",
    description: "Real-world examples of organizations driving measurable sustainability impact.",
    href: "/resources#case-studies",
    icon: Page,
  },
  {
    title: "Best Practices and Research",
    description: "Evidence, frameworks, and guidance to inform your sustainability strategy.",
    href: "/resources#best-practices",
    icon: LightBulb,
  },
  {
    title: "Sustainability Concepts and Terms",
    description: "A plain-language glossary of the terms shaping sustainability today.",
    href: "/resources#glossary",
    icon: BookStack,
  },
]

export function ResourceHubPreview() {
  return (
    <section className="relative py-16 lg:py-24 bg-mist overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <div className="w-16 h-px bg-deep-ocean/30 mb-4" />
              <p className="text-sm text-deep-ocean/60 tracking-wider mb-4" style={{ fontFamily: "var(--font-geom)" }}>
                Resource Hub
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl text-deep-ocean leading-[1.1] max-w-2xl"
                style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
              >
                Explore tools, insights, and ideas
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Link href="/resources#news">
                <OrganicButton variant="primary" size="default">
                  <span className="flex items-center gap-2">
                    Latest news &amp; updates
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </OrganicButton>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Three component cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {components.map((item, idx) => {
            const Icon = item.icon
            return (
              <AnimateOnScroll key={item.title} delay={idx * 100}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between bg-white/60 backdrop-blur-sm border border-deep-ocean/10 p-8 hover:bg-white/80 transition-colors"
                  style={{ borderRadius: "40px 10px 40px 40px" }}
                >
                  <div>
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center bg-seafoam"
                      style={{ borderRadius: "50px 10px 50px 50px" }}
                    >
                      <Icon className="h-6 w-6 text-deep-ocean" />
                    </div>
                    <h3
                      className="text-xl text-deep-ocean mb-3 group-hover:text-primary-teal transition-colors"
                      style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-deep-ocean/60 leading-relaxed"
                      style={{ fontFamily: "var(--font-geom)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-deep-ocean group-hover:text-primary-teal transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
