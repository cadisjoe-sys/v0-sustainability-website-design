"use client"

import { useState, useEffect } from "react"
import { Plus, Minus } from "iconoir-react"

const serviceCategories = [
  {
    id: "strategy",
    title: "Sustainability Strategy & Planning",
    description: "Strategic guidance and actionable plans to lead your organization toward sustainable success.",
    services: [
      {
        name: "Environmental Action Plans",
        description:
          "Practical environmental action plans that set clear targets, define responsibilities, and guide your business to measurable sustainability improvements, revenue growth, and cost savings.",
      },
      {
        name: "Funding & Partnership Strategy and Outreach",
        description:
          "Understand potential funding opportunities and grants, including government programs, designed to accelerate your sustainability goals.",
      },
    ],
  },
  {
    id: "compliance",
    title: "Stakeholder Engagement & Compliance Reporting",
    description: "Build trust and ensure regulatory compliance.",
    services: [
      {
        name: "Certification Readiness Assessment",
        description:
          "Understand which certifications can help you achieve your business goals with a cost-benefit analysis of certifications relevant for your industry. B Corp is a globally recognized certification and the gold standard of successful purpose-driven businesses.",
      },
      {
        name: "ESG Framework Reporting",
        description:
          "Review and analyze environmental, social, and governance metrics vis-a-vis industry peers. We will create a game plan relevant to your industry sector.",
      },
      {
        name: "B Corp Impact Assessments",
        description:
          "Determine your score and potential for B Corp certification, plus highlight strengths and gaps via peer benchmarking.",
      },
    ],
  },
  {
    id: "competitive",
    title: "Using Sustainability as a Competitive Edge",
    description: "Harness sustainability to differentiate your brand and unlock new market opportunities.",
    services: [
      {
        name: "Sustainability Brand Audits",
        description:
          "Evaluate the strengths and vulnerabilities of your brand's sustainability positioning versus the competition.",
      },
      {
        name: "Cause Marketing Programs & Strategic Partnerships",
        description:
          "Develop marketing programs that authentically connect your brand with environmental causes and reach new audiences.",
      },
    ],
  },
  {
    id: "operations",
    title: "Sustainable Operations",
    description: "Transform operations for long-term resilience and measurable climate impact.",
    services: [
      {
        name: "Zero Waste & GHG Reduction",
        description:
          "Strategic roadmaps to measure, manage, and reduce waste and greenhouse gas emissions while demonstrating environmental leadership.",
      },
      {
        name: "Regenerative Agriculture & Food System Strategies",
        description:
          "Develop strategies for implementing regenerative practices that restore soil health and create resilient food systems and educate and entice consumers.",
      },
    ],
  },
]

export function ServiceCategories() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("strategy")

  // Open (and scroll to) the category referenced by the URL hash, e.g. /services#operations
  useEffect(() => {
    const validIds = serviceCategories.map((c) => c.id)
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (validIds.includes(hash)) {
        setExpandedCategory(hash)
        // Wait for the accordion to expand before scrolling into view
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
    openFromHash()
    window.addEventListener("hashchange", openFromHash)
    return () => window.removeEventListener("hashchange", openFromHash)
  }, [])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <section className="relative py-24 lg:py-32 bg-mist overflow-hidden">
      {/* Decorative Style-M shapes */}
      <div
        className="absolute top-40 -right-20 w-64 h-64 bg-seafoam/30 blur-3xl"
        style={{ borderRadius: "50px 10px 50px 50px" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -left-20 w-48 h-48 bg-primary-teal/20 blur-3xl"
        style={{ borderRadius: "50px 10px 50px 50px" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs text-deep-ocean/60 tracking-widest mb-3" style={{ fontFamily: "var(--font-geom)" }}>
            Our Services
          </p>
          <div className="w-16 h-px bg-deep-ocean/30 mb-6" />
          <h2 className="text-3xl lg:text-4xl text-deep-ocean" style={{ fontFamily: "var(--font-geom)" }}>
            How we can help
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-0">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32">
              {/* Accordion Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full py-6 flex items-start justify-between text-left group border-b border-deep-ocean/10 hover:border-deep-ocean/30 transition-colors"
                aria-expanded={expandedCategory === category.id}
              >
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl tracking-tight transition-opacity ${
                    expandedCategory === category.id ? "text-deep-ocean" : "text-deep-ocean/40"
                  } group-hover:text-deep-ocean`}
                  style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
                >
                  {category.title}
                </h3>
                <div className="flex-shrink-0 ml-4 mt-1">
                  {expandedCategory === category.id ? (
                    <div
                      className="w-8 h-8 bg-seafoam flex items-center justify-center"
                      style={{ borderRadius: "50px 10px 50px 50px" }}
                    >
                      <Minus className="w-4 h-4 text-deep-ocean" />
                    </div>
                  ) : (
                    <div
                      className="w-8 h-8 border border-deep-ocean/30 flex items-center justify-center group-hover:border-deep-ocean transition-colors"
                      style={{ borderRadius: "50px 10px 50px 50px" }}
                    >
                      <Plus className="w-4 h-4 text-deep-ocean/40 group-hover:text-deep-ocean transition-colors" />
                    </div>
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  expandedCategory === category.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="py-8 grid lg:grid-cols-2 gap-12">
                  {/* Left: Description */}
                  <div>
                    <p
                      className="text-lg text-deep-ocean/70 leading-relaxed"
                      style={{ fontFamily: "var(--font-geom)" }}
                    >
                      {category.description}
                    </p>
                  </div>

                  {/* Right: Services List */}
                  <div className="space-y-6">
                    {category.services.map((service) => (
                      <div
                        key={service.name}
                        className="bg-white/60 border border-deep-ocean/10 p-5"
                        style={{ borderRadius: "20px 10px 20px 20px" }}
                      >
                        <h4 className="text-base text-deep-ocean mb-2" style={{ fontFamily: "var(--font-geom)" }}>
                          {service.name}
                        </h4>
                        <p
                          className="text-sm text-deep-ocean/60 leading-relaxed"
                          style={{ fontFamily: "var(--font-geom)" }}
                        >
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
