"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { STYLE_M } from "@/lib/style-m"

const industries = [
  "Manufacturing",
  "Technology",
  "Financial Services",
  "Healthcare",
  "Retail & Consumer",
  "Energy & Utilities",
  "Real Estate",
  "Transportation",
  "Food & Agriculture",
  "Professional Services",
]

export function IndustriesSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-mist overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-64 h-64 bg-seafoam/10 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary-teal/10 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-16">
            <div className="w-16 h-px bg-deep-ocean/30 mb-4" />
            <p
              className="text-sm text-deep-ocean/60 tracking-wide"
              style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
            >
              Our Expertise
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - title and description */}
          <div>
            <AnimateOnScroll>
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl text-deep-ocean leading-[1.1] mb-8"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
              >
                Industries we work with
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <p
                className="text-base lg:text-lg text-stone leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                From startups to Fortune 500, we team up with organizations across sectors to solve their most complex
                sustainability challenges. Experts across industries trust our expertise.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right column - industry tags */}
          <div className="flex flex-wrap gap-4">
            {industries.map((industry, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 50}>
                <div
                  className={`inline-block px-6 py-3 bg-white/50 backdrop-blur-sm border border-deep-ocean/20 text-lg lg:text-xl text-deep-ocean hover:bg-seafoam hover:text-deep-ocean hover:border-seafoam transition-all duration-500 cursor-pointer ${STYLE_M}`}
                  style={{
                    fontFamily: "var(--font-geom), Geneva, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {industry}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-20"></div>
      </div>
    </section>
  )
}
