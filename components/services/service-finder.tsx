"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "iconoir-react"
import { useState } from "react"

const needs = [
  {
    id: "advantage",
    question: "Do I need to establish a competitive advantage?",
    drivers: ["Meet demand for environmentally friendly products", "Attract and retain talent", "Introduce climate-forward innovation and circularity"],
    services: ["Certification and B Corp readiness", "Sustainability brand audits", "Product innovation research", "Stakeholder education"],
    href: "/services#competitive",
  },
  {
    id: "suppliers",
    question: "Can supplier collaboration improve resilience and efficiency?",
    drivers: ["Comply with regulations and produce stronger reports", "Realize cost savings and improve efficiency", "Reduce business risk and strengthen resilience"],
    services: ["Supplier engagement plans", "Stakeholder mapping", "Greenhouse gas inventory roadmaps", "Zero waste strategy"],
    href: "/services#operations",
  },
  {
    id: "customers",
    question: "How can I inspire customers and build community?",
    drivers: ["Differentiate products and services", "Reach climate-conscious customers", "Build authentic communities around shared values"],
    services: ["Cause marketing programs", "Sustainability brand audits and marketing plans", "Strategic partnerships and promotions"],
    href: "/services#competitive",
  },
  {
    id: "growth",
    question: "Am I looking for new business growth drivers?",
    drivers: ["Increase revenue from existing or new customers", "Reach new funding sources", "Build relationships with impact funds and strategic partners"],
    services: ["Funding and partnership strategy", "Partner outreach", "Grant and impact fund research"],
    href: "/services#strategy",
  },
]

export function ServiceFinder() {
  const [selectedId, setSelectedId] = useState(needs[0].id)
  const selected = needs.find((need) => need.id === selectedId) ?? needs[0]

  return (
    <section className="bg-deep-ocean py-20 text-white lg:py-28" aria-labelledby="service-finder-title">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs tracking-widest text-seafoam">START YOUR JOURNEY</p>
          <h2 id="service-finder-title" className="text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Chart a strong course
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
            We help achieve your business goals, realize new opportunities, and address challenges as you chart your sustainability course. Choose the question closest to your priorities to identify a practical next step.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-3" role="list" aria-label="Business needs">
            {needs.map((need) => {
              const active = need.id === selected.id
              return (
                <button
                  key={need.id}
                  type="button"
                  role="listitem"
                  aria-pressed={active}
                  onClick={() => setSelectedId(need.id)}
                  className={`rounded-[30px_8px_30px_30px] border p-5 text-left text-base leading-relaxed transition-colors ${active ? "border-seafoam bg-seafoam text-deep-ocean" : "border-white/20 bg-white/5 text-white hover:border-seafoam/70"}`}
                >
                  {need.question}
                </button>
              )
            })}
          </div>

          <div className="rounded-[50px_10px_50px_50px] bg-mist p-6 text-deep-ocean lg:p-9" aria-live="polite">
            <p className="text-xs font-medium tracking-widest text-primary-teal">YOUR PRIORITIES</p>
            <h3 className="mt-3 text-balance text-2xl leading-snug">{selected.question}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {selected.drivers.map((driver) => (
                <li key={driver} className="flex items-start gap-3 text-sm leading-relaxed text-deep-ocean/70">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary-teal" aria-hidden="true" />
                  {driver}
                </li>
              ))}
            </ul>
            <div className="mt-7 border-t border-deep-ocean/10 pt-6">
              <p className="text-sm font-medium">Consider these services:</p>
              <p className="mt-2 text-sm leading-relaxed text-deep-ocean/70">{selected.services.join(" · ")}</p>
              <Link href={selected.href} className="mt-6 inline-flex items-center gap-2 rounded-[50px_10px_50px_50px] bg-deep-ocean px-5 py-3 text-sm font-medium text-seafoam transition-colors hover:bg-primary-teal">
                Explore recommended services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
