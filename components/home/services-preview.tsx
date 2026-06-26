"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Minus, ArrowRight } from "iconoir-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { OrganicButton } from "@/components/ui/organic-button"

const services = [
  {
    number: "01",
    title: "Strategy or Operations",
    description:
      "We take a holistic approach to sustainability consulting. Our clients can choose from comprehensive strategy development, operational transformation, or a custom blend of both - built around their needs.",
  },
  {
    number: "02",
    title: "Stakeholder Engagement",
    description:
      "Build trust with transparent, credible reporting. We help you communicate your sustainability journey to investors, customers, and regulators through frameworks best suited for your organization.",
  },
  {
    number: "03",
    title: "Competitive Advantage",
    description:
      "Transform sustainability into your greatest business asset. We help you identify opportunities where environmental responsibility drives innovation, market differentiation, and growth.",
  },
  {
    title: "Sustainability Strategy & Leadership",
    description:
      "Strategic, actionable plans and programs that achieve your sustainability goals. We help you develop comprehensive strategies that align with your business objectives.",
    href: "/services#strategy",
    image: "/images/team-meeting-lighthouse.png",
  },
  {
    title: "Stakeholder Engagement & Compliance",
    description:
      "Transparent, credible reporting on frameworks best suited for your organization. Navigate complex regulatory requirements with confidence.",
    href: "/services#compliance",
    image: "/images/construction-site-supervisor.png",
  },
  {
    title: "Sustainability as Competitive Edge",
    description:
      "Harness sustainability to differentiate your brand and unlock new markets. Transform environmental responsibility into business opportunity.",
    href: "/services#competitive",
    image: "/images/sustainability-presentation.png",
  },
  {
    title: "Sustainable Operations",
    description:
      "Transform operations for long-term resilience and measurable climate impact. Optimize processes to reduce waste and improve efficiency.",
    href: "/services#operations",
    image: "/images/growth-presentation.png",
  },
]

export function ServicesPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-16 lg:py-24 bg-seafoam overflow-hidden">
      <div
        className="absolute top-20 -left-20 w-64 h-64 bg-primary-teal/20 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 -right-20 w-80 h-80 bg-ocean/10 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-8">
            <div className="w-16 h-px bg-deep-ocean/30 mb-4" />
            <p
              className="text-sm text-deep-ocean/60 tracking-wider"
              style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
            >
              Our Services
            </p>
          </div>
        </AnimateOnScroll>

        {/* Header */}
        <AnimateOnScroll>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ocean leading-[1.1] max-w-3xl mb-4"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
          >
            How we can help you navigate your sustainability journey.
          </h2>
        </AnimateOnScroll>

        <div className="w-32 h-px bg-deep-ocean/30 my-8" />

        <AnimateOnScroll delay={100}>
          <OrganicButton href="/contact" variant="primary">
            Let&apos;s talk
          </OrganicButton>
        </AnimateOnScroll>

        <div className="mt-24 lg:mt-32 space-y-0">
          {services.slice(0, 3).map((service, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 100}>
              <div className="py-16 lg:py-20 border-t border-deep-ocean/10 first:border-t-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Number with vertical divider */}
                  <div className="lg:col-span-1 flex items-start gap-6">
                    <span
                      className="text-sm text-deep-ocean/50 tracking-wider"
                      style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
                    >
                      {service.number}
                    </span>
                    <div className="hidden lg:block w-px h-24 bg-deep-ocean/10" />
                  </div>

                  {/* Title and Description */}
                  <div className="lg:col-span-11 space-y-6">
                    <h3
                      className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-deep-ocean leading-tight"
                      style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base lg:text-lg text-deep-ocean/70 leading-relaxed max-w-3xl"
                      style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Accordion service sections */}
        <div className="mt-24 lg:mt-32 space-y-0">
          {services.slice(3).map((service, idx) => (
            <AnimateOnScroll key={idx + 3} delay={(idx + 3) * 50}>
              <div className="border-b border-deep-ocean/10">
                <button
                  onClick={() => toggleAccordion(idx + 3)}
                  className="w-full flex items-center justify-between py-6 lg:py-8 text-left group"
                >
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight transition-colors duration-300 ${
                      openIndex === idx + 3 ? "text-ocean" : "text-deep-ocean group-hover:text-ocean"
                    }`}
                    style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={`flex-shrink-0 ml-4 w-10 h-10 lg:w-12 lg:h-12 rounded-[20px_5px_20px_20px] flex items-center justify-center transition-all duration-300 ${
                      openIndex === idx + 3
                        ? "bg-deep-ocean text-seafoam"
                        : "bg-deep-ocean/20 text-deep-ocean group-hover:bg-deep-ocean group-hover:text-seafoam"
                    }`}
                  >
                    {openIndex === idx + 3 ? (
                      <Minus className="w-5 h-5 lg:w-6 lg:h-6" />
                    ) : (
                      <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
                    )}
                  </div>
                </button>

                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: openIndex === idx + 3 ? "600px" : "0",
                    opacity: openIndex === idx + 3 ? 1 : 0,
                    transition: "max-height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out",
                  }}
                >
                  <div className="pb-8 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="aspect-video overflow-hidden rounded-[50px_10px_50px_50px]">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p
                        className="text-lg text-deep-ocean/80 leading-relaxed mb-6"
                        style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                      >
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-ocean tracking-wider hover:text-deep-ocean transition-colors group/link"
                        style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-12">
            <Link href="/services">
              <OrganicButton variant="primary" size="default">
                View All Services
              </OrganicButton>
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="mt-24 flex justify-center"></div>
      </div>
    </section>
  )
}
