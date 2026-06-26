"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { OrganicButton } from "@/components/ui/organic-button"
import { STYLE_M } from "@/lib/style-m"

const config = {
  // Main CTA button
  ctaButton: {
    text: "Let's talk",
    href: "/contact",
  },
  // View all services button - on deep-ocean background, use seafoam
  servicesButton: {
    text: "View all services",
    href: "/services",
    backgroundColor: "bg-seafoam",
    textColor: "text-deep-ocean",
    borderColor: "border-seafoam",
    hoverBg: "hover:bg-seafoam/80",
  },
  tagStyles: {
    row1: {
      bg: "bg-primary-teal/30",
      text: "text-white",
    },
    row2: {
      bg: "bg-ocean/40",
      text: "text-white",
    },
    row3: {
      bg: "bg-primary-teal/20",
      text: "text-white",
    },
  },
}

const serviceTags = [
  "Strategy",
  "Compliance",
  "Reporting",
  "Training",
  "ESG",
  "Carbon Footprint",
  "Net Zero",
  "Sustainability",
  "Impact",
  "Green Finance",
  "Supply Chain",
  "Circular Economy",
  "Biodiversity",
  "Climate Risk",
  "Stakeholder Engagement",
  "CSRD",
  "TCFD",
  "GRI Standards",
  "Science-Based Targets",
  "B Corp Certification",
  "Renewable Energy",
  "Waste Management",
  "Water Stewardship",
]

// Split into 3 rows
const row1 = serviceTags.slice(0, 8)
const row2 = serviceTags.slice(8, 16)
const row3 = serviceTags.slice(16, 24)

export function IntroSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-mist overflow-hidden">
      <div
        className="absolute top-20 right-10 w-64 h-64 bg-seafoam/20 opacity-40 blur-3xl"
        style={{ borderRadius: STYLE_M }}
      />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-primary-teal/15 opacity-40 blur-3xl"
        style={{ borderRadius: STYLE_M }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-deep-ocean leading-[1.3] max-w-3xl mb-16 font-normal">
            Smoothsailing Sustainability offers custom solutions tailored to your organization&apos;s unique needs.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <OrganicButton href={config.ctaButton.href} variant="primary" size="lg">
            {config.ctaButton.text}
          </OrganicButton>
        </AnimateOnScroll>

        <div className="mt-20 lg:mt-32">
          <div
            className="bg-deep-ocean p-8 lg:p-12 relative overflow-hidden"
            style={{ borderRadius: "50px 10px 50px 50px" }}
          >
            {/* Decorative accent shapes */}
            <div
              className="absolute top-0 right-0 w-48 h-48 bg-seafoam/10 blur-2xl"
              style={{ borderRadius: "50px 10px 50px 50px" }}
            />
            <div
              className="absolute bottom-0 left-0 w-32 h-32 bg-primary-teal/10 blur-2xl"
              style={{ borderRadius: "50px 10px 50px 50px" }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left side - Title and description */}
              <AnimateOnScroll>
                <div>
                  <p className="text-xs text-seafoam/60 tracking-widest mb-2">Expertise</p>
                  <div className="w-20 h-px bg-seafoam/40 mb-6" />
                  <h3 className="text-3xl sm:text-4xl text-seafoam font-normal mb-6">What we do</h3>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-6">
                    Our focus is meeting your business's needs, helping you realize new opportunities and address
                    challenges as you chart your sustainability course. Our services can be adapted to companies of
                    every shape and size, from start-ups to Fortune 100 organizations.
                  </p>
                  <OrganicButton href={config.servicesButton.href} variant="secondary" size="md">
                    {config.servicesButton.text}
                  </OrganicButton>
                </div>
              </AnimateOnScroll>

              <div className="relative overflow-hidden h-48 lg:h-56 pointer-events-none select-none">
                {/* Gradient masks for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-deep-ocean to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-deep-ocean to-transparent z-10" />

                <div className="flex flex-col gap-3 h-full justify-center">
                  <div className="flex gap-3 animate-marquee-left">
                    {[...row1, ...row1].map((tag, i) => (
                      <span
                        key={`r1-${i}`}
                        className={`px-4 py-2 ${config.tagStyles.row1.bg} ${config.tagStyles.row1.text} text-sm whitespace-nowrap flex-shrink-0`}
                        style={{ borderRadius: "20px 5px 20px 20px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 animate-marquee-right">
                    {[...row2, ...row2].map((tag, i) => (
                      <span
                        key={`r2-${i}`}
                        className={`px-4 py-2 ${config.tagStyles.row2.bg} ${config.tagStyles.row2.text} text-sm whitespace-nowrap flex-shrink-0`}
                        style={{ borderRadius: "20px 5px 20px 20px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 animate-marquee-left-slow">
                    {[...row3, ...row3].map((tag, i) => (
                      <span
                        key={`r3-${i}`}
                        className={`px-4 py-2 ${config.tagStyles.row3.bg} ${config.tagStyles.row3.text} text-sm whitespace-nowrap flex-shrink-0`}
                        style={{ borderRadius: "20px 5px 20px 20px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
