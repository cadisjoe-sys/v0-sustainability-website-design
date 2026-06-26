"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { OrganicButton } from "@/components/ui/organic-button"

export function BenefitsCTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <AnimateOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left: Content */}
            <div className="lg:max-w-2xl">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-deep-ocean mb-4"
                style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
              >
                Unlock Your Advantage
              </h2>

              <p className="text-lg text-deep-ocean/70 leading-relaxed" style={{ fontFamily: "var(--font-geom)" }}>
                Let us help you transform these benefits into tangible results for your organization. Our team is ready
                to chart your path to sustainable success.
              </p>
            </div>

            {/* Right: CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <OrganicButton href="/contact" variant="primary" size="lg">
                Start Your Journey
              </OrganicButton>
              <OrganicButton href="/services" variant="outline" size="lg">
                Explore Services
              </OrganicButton>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
