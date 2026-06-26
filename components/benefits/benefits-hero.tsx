"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { OrganicButton } from "@/components/ui/organic-button"

export function BenefitsHero() {
  return (
    <section className="relative py-24 lg:py-40 bg-seafoam overflow-hidden">
      {/* ... existing code (decorative shapes) ... */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <p className="text-sm text-deep-ocean/60 tracking-wide mb-3" style={{ fontFamily: "var(--font-geom)" }}>
            Sustainability Benefits
          </p>
          <div className="w-20 h-px bg-deep-ocean/30 mb-8" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-deep-ocean leading-[1.1] max-w-5xl mb-8 font-normal">
            Unlock Your{" "}
            <span className="inline-flex items-baseline gap-3">
              Sustainability
              <span
                className="inline-block w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-deep-ocean to-primary-teal"
                style={{ borderRadius: "25px 5px 25px 25px" }}
              />
            </span>{" "}
            Advantage
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p
            className="text-lg lg:text-xl text-deep-ocean/80 leading-relaxed max-w-3xl mb-12"
            style={{ fontFamily: "var(--font-geom)" }}
          >
            Sustainability is good for business. Integrating environmental measures into your business drives lower
            costs, higher revenues, stronger talent retention, and greater brand loyalty—while delivering environmental
            benefits your stakeholders value.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <OrganicButton href="#lower-costs" variant="primary" size="lg">
            Explore the Benefits
          </OrganicButton>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
