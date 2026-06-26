"use client"

import { useState, useRef } from "react"
import { Plus, Minus } from "iconoir-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { STYLE_M } from "@/lib/style-m"

const benefits = [
  {
    id: "lower-costs",
    title: "Lower Costs",
    description:
      "Many companies and organizations are reducing their overall costs through environmental actions such as reducing virgin plastic use, lowering energy bills through renewable energy, and implementing water conservation measures.",
    highlights: [
      {
        label: "$325K",
        text: "saved annually by Canyon Bicycles through sustainable packaging",
        link: "https://media-centre.canyon.com/en-INT/246322-pedal-driven-progress-canyon-s-path-to-responsible-bike-packaging-through-pack4good-initiative/",
      },
      {
        label: "$1B+",
        text: "increase in Adidas operating profit aided by environmental improvements",
        link: "https://sustainabilitymag.com/articles/inside-adidas-approach-to-growth-and-sustainability",
      },
      {
        label: "$3M",
        text: "saved by Columbia Manufacturing in water and sewer fees",
        link: "https://www.mass.gov/files/columbia_case_study_-_final_2015_1.pdf",
      },
    ],
  },
  {
    id: "increase-revenue",
    title: "Increase Revenues from Consumer Demand",
    description:
      "Shopping habits have changed, consumers will pay a premium for sustainability, and sustainable solutions and products generate incremental revenue.",
    highlights: [
      {
        label: "58%",
        text: "of Americans are prepared to make environmentally conscious decisions",
        link: "https://www.bsigroup.com/en-US/insights-and-media/media-center/press-releases/2024/december/sustainable-shopping-us-survey/",
      },
      {
        label: "1.7B",
        text: "Climate Pledge Friendly products purchased on Amazon in 2024",
        link: "https://trellis.net/article/amazon-climate-pledge-signatories/",
      },
      {
        label: "2/3",
        text: "of Americans willing to pay more for sustainable products",
        link: "https://ecocart.io/state-of-sustainability-in-ecommerce-report/",
      },
    ],
  },
  {
    id: "supplier-partnerships",
    title: "Strong Supplier Partnerships. Resilient Supply Chains.",
    description:
      "Enhanced sustainability practices turn your suppliers into allies for innovation and resilience. Supply chain emissions average 11 times higher than operational emissions.",
    highlights: [
      {
        label: "75%+",
        text: "of total GHG emissions comes from supply chains",
        link: "https://www.epa.gov/climateleadership/scope-3-inventory-guidance",
      },
      {
        label: "81%",
        text: "of companies prioritize sustainable sourcing",
        link: "https://procurementtactics.com/sustainable-procurement-statistics/",
      },
      {
        label: "99%",
        text: "of executives in food and ag report increased revenue from sustainability",
        link: "https://www.ey.com/content/dam/ey-unified-site/ey-com/en-ca/insights/supply-chain/documents/ey-supply-chain-sustainability-report-2022-007702-22gbl.pdf",
      },
    ],
  },
  {
    id: "industry-leader",
    title: "Be an Industry Leader",
    description:
      "Companies with sustainable practices or with a strong ESG strategy are market leaders. Corporate Knights' 100 most sustainable companies outperformed the market on average from 2005 to 2025.",
    highlights: [
      {
        label: "446%",
        text: "return for Corporate Knights' 100 most sustainable companies",
        link: "https://www.corporateknights.com/rankings/global-100-rankings/2023-global-100-rankings/2023-global-100-most-sustainable-companies/",
      },
      {
        label: "217%",
        text: "5-year stock growth for Sprouts Farmers Market",
        link: "https://www.sprouts.com/",
      },
    ],
  },
  {
    id: "compliance",
    title: "Comply with Regulations and Stakeholder Demands",
    description: "The leading companies in the world report their climate, social, and governance metrics.",
    highlights: [
      {
        label: "73%",
        text: "of Global 2000 companies have Scope 1 and 2 net zero targets",
        link: "https://kpmg.com/xx/en/our-insights/esg/the-move-to-mandatory-reporting.html",
      },
      {
        label: "99%",
        text: "of S&P 500 companies report sustainability information",
        link: "https://www.bdo.com/insights/sustainability-and-esg/99-of-the-s-p-500-is-reporting-on-esg-and-65-are-obtaining-esg-assurance",
      },
      {
        label: "88%+",
        text: "of companies disclose Scope 1 and 2 emissions",
        link: "https://www.esgtoday.com/more-than-40-of-public-companies-now-reporting-on-scope-3-emissions-but-u-s-lagging-far-behind-msci/",
      },
    ],
  },
]

export function BenefitCards() {
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null)
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const toggleBenefit = (benefitId: string) => {
    setExpandedBenefit(expandedBenefit === benefitId ? null : benefitId)
  }

  return (
    <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
      {/* Decorative Style-M shapes */}
      <div
        className="absolute top-40 -right-20 w-72 h-72 bg-seafoam/30 blur-3xl"
        style={{ borderRadius: STYLE_M }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 -left-20 w-64 h-64 bg-primary-teal/20 blur-3xl"
        style={{ borderRadius: STYLE_M }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="mb-16">
            <p className="text-sm text-deep-ocean/60 tracking-wide mb-3" style={{ fontFamily: "var(--font-geom)" }}>
              Why Sustainability Pays
            </p>
            <div className="w-20 h-px bg-deep-ocean/30 mb-8" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-deep-ocean leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
            >
              Measurable impact across every dimension of your business
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Benefit Accordion List */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={benefit.id} delay={index * 50}>
              <div id={benefit.id} className="scroll-mt-32">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleBenefit(benefit.id)}
                  className="w-full py-6 flex items-start justify-between text-left group border-b border-deep-ocean/10 hover:border-deep-ocean/30 transition-colors"
                  aria-expanded={expandedBenefit === benefit.id}
                >
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight transition-all duration-300 ${
                      expandedBenefit === benefit.id ? "text-deep-ocean" : "text-deep-ocean/40"
                    } group-hover:text-deep-ocean`}
                    style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
                  >
                    {benefit.title}
                  </h3>
                  <div className="flex-shrink-0 ml-4 mt-2">
                    {expandedBenefit === benefit.id ? (
                      <div
                        className="w-10 h-10 bg-seafoam flex items-center justify-center transition-all duration-300"
                        style={{ borderRadius: "20px 5px 20px 20px" }}
                      >
                        <Minus className="w-5 h-5 text-deep-ocean" />
                      </div>
                    ) : (
                      <div
                        className="w-10 h-10 border-2 border-deep-ocean/30 flex items-center justify-center group-hover:border-deep-ocean transition-all duration-300"
                        style={{ borderRadius: "20px 5px 20px 20px" }}
                      >
                        <Plus className="w-5 h-5 text-deep-ocean/40 group-hover:text-deep-ocean transition-colors" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  ref={(el) => {
                    contentRefs.current[benefit.id] = el
                  }}
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  style={{
                    maxHeight:
                      expandedBenefit === benefit.id ? contentRefs.current[benefit.id]?.scrollHeight || 800 : 0,
                    opacity: expandedBenefit === benefit.id ? 1 : 0,
                  }}
                >
                  <div className="py-8">
                    <p
                      className="text-lg text-deep-ocean/80 leading-relaxed mb-10 max-w-2xl"
                      style={{ fontFamily: "var(--font-geom)" }}
                    >
                      {benefit.description}
                    </p>

                    {/* Highlight Stats */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {benefit.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="bg-seafoam/30 backdrop-blur-sm p-6 border border-deep-ocean/10"
                          style={{ borderRadius: "20px 5px 20px 20px" }}
                        >
                          <p
                            className="text-4xl lg:text-5xl text-deep-ocean mb-3"
                            style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
                          >
                            {highlight.label}
                          </p>
                          <p
                            className="text-sm text-deep-ocean/70 leading-relaxed"
                            style={{ fontFamily: "var(--font-geom)" }}
                          >
                            {highlight.text}
                          </p>
                          {highlight.link && (
                            <a
                              href={highlight.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary-teal underline mt-2"
                            >
                              Learn More
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md"></div>
    </section>
  )
}
