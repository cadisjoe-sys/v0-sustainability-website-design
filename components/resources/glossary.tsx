import Link from "next/link"
import { OpenNewWindow } from "iconoir-react"
import { ResourceEmptyState } from "./resource-empty-state"
import { matchesResourceFilters } from "./resource-filter"

interface GlossaryProps {
  searchQuery?: string
  activeFilters?: string[]
  onTagClick?: (tag: string) => void
  onClearFilters?: () => void
}

const terms = [
  {
    term: "B Corp (Certified B Corporation)",
    definition:
      "A for-profit business that has earned a certification from B Lab for meeting rigorous standards of social and environmental performance, accountability, and transparency.",
    link: "https://www.bcorporation.net/en-us/certification/",
    category: "Certification",
  },
  {
    term: "Carbon Neutral",
    definition:
      "Achieving net zero carbon dioxide emissions by balancing carbon emissions with carbon removal or sequestration.",
    category: "Emissions",
  },
  {
    term: "Circular Economy",
    definition:
      "A system where materials never become waste and nature is regenerated. In a circular economy, products and materials are kept in circulation through processes like maintenance, reuse, refurbishment, remanufacture, recycling, and composting. (Ellen MacArthur Foundation)",
    category: "Strategy",
  },
  {
    term: "Climate Justice",
    definition:
      "A framework that acknowledges climate change has differing social, economic, and health impacts on underprivileged populations, and seeks equitable solutions that address root causes of climate change.",
    category: "Core Concept",
  },
  {
    term: "Electrification",
    definition:
      "The process of replacing technologies that use fossil fuels with technologies that use electricity as a source of energy, often paired with renewable energy sources to reduce emissions.",
    category: "Strategy",
  },
  {
    term: "ESG Reporting Frameworks",
    definition:
      "Standardized guidelines for disclosing environmental, social, and governance performance. Common frameworks include GRI (Global Reporting Initiative), SASB (Sustainability Accounting Standards Board), TCFD (Task Force on Climate-related Financial Disclosures), and CDP (Carbon Disclosure Project).",
    link: "https://www.globalreporting.org/",
    category: "Certification",
  },
  {
    term: "Food Systems",
    definition:
      "The interconnected activities involving the production, processing, transport, and consumption of food. Sustainable food systems aim to deliver food security and nutrition while minimizing environmental impact.",
    category: "Agriculture",
  },
  {
    term: "Forest Management",
    definition:
      "The practice of planning and implementing activities to meet ecological, economic, and social objectives while maintaining forest health and biodiversity for current and future generations.",
    category: "Agriculture",
  },
  {
    term: "Green Buildings",
    definition:
      "Structures designed, built, and operated to minimize environmental impact through energy efficiency, water conservation, sustainable materials, and healthy indoor environments. Certifications include LEED and WELL.",
    category: "Strategy",
  },
  {
    term: "Nudge",
    definition:
      "A subtle intervention that positively influences decisions and behaviors without restricting freedom. Nudges encourage voluntary compliance and are non-intrusive.",
    category: "Behavior",
  },
  {
    term: "Plastics & Packaging",
    definition:
      "Materials management focusing on reducing single-use plastics, increasing recyclability, and transitioning to biodegradable or compostable alternatives to minimize environmental pollution.",
    category: "Strategy",
  },
  {
    term: "Regenerative Agriculture",
    definition:
      "A conservation and rehabilitation approach to food and farming systems focused on regeneration, increasing biodiversity, improving the water cycle, and enhancing ecosystem services. (Rodale Institute)",
    category: "Agriculture",
  },
  {
    term: "Resilience",
    definition:
      'The staying power required to withstand extreme events. Systems that can "effectively anticipate, prevent, prepare for, detect, adapt to, respond to and recover from climate-related shocks, so as to bring sustained improvements." (WHO)',
    category: "Strategy",
  },
  {
    term: "Scopes (GHG Emissions)",
    definition:
      "Scope 1: Direct emissions from owned operations. Scope 2: Indirect emissions from purchased energy. Scope 3: All other indirect emissions in the value chain.",
    category: "Emissions",
  },
  {
    term: "Sustainability",
    definition:
      "The ability to be maintained at a certain rate or level. Avoidance of the depletion of natural resources to maintain ecological balance.",
    category: "Core Concept",
  },
  {
    term: "Sustainable Textiles & Fashion",
    definition:
      "Approaches to clothing and textile production that minimize environmental impact through sustainable materials, ethical labor practices, circular design principles, and reduced waste.",
    category: "Strategy",
  },
  {
    term: "Waste Management",
    definition:
      "The collection, transport, processing, and disposal of waste materials with the goal of reducing environmental impact. Zero waste strategies aim to redesign resource lifecycles so all products are reused.",
    category: "Strategy",
  },
]

export function getGlossaryResultCount(searchQuery = "", activeFilters: string[] = []) {
  return terms.filter((item) =>
    matchesResourceFilters(`${item.term} ${item.definition}`, ["Guides", item.category], searchQuery, activeFilters),
  ).length
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Certification: { bg: "bg-primary-teal/20", text: "text-primary-teal" },
  Behavior: { bg: "bg-seafoam/40", text: "text-deep-ocean" },
  Agriculture: { bg: "bg-ocean/20", text: "text-ocean" },
  Strategy: { bg: "bg-deep-ocean/10", text: "text-deep-ocean" },
  Emissions: { bg: "bg-primary-teal/30", text: "text-deep-ocean" },
  "Core Concept": { bg: "bg-seafoam", text: "text-deep-ocean" },
}

export function Glossary({ searchQuery = "", activeFilters = [], onTagClick, onClearFilters }: GlossaryProps) {
  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault()
    e.stopPropagation()
    onTagClick?.(category)
  }

  const filteredTerms = terms.filter((item) =>
    matchesResourceFilters(`${item.term} ${item.definition}`, ["Guides", item.category], searchQuery, activeFilters),
  )

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl lg:text-3xl text-deep-ocean mb-3" style={{ fontFamily: "var(--font-geom)" }}>
          Sustainability Concepts & Terms
        </h2>
        <p className="text-deep-ocean/70" style={{ fontFamily: "var(--font-geom)" }}>
          Key definitions to help you navigate the sustainability landscape.
        </p>
      </div>

      {filteredTerms.length === 0 && (
        <ResourceEmptyState
          description="No terms match your search or filters. Try a broader search or reset the controls."
          onClearFilters={onClearFilters}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((item) => {
          const colors = categoryColors[item.category] || { bg: "bg-seafoam/30", text: "text-deep-ocean" }
          return (
            <div
              key={item.term}
              className="bg-white border border-deep-ocean/10 p-5"
              style={{ borderRadius: "20px 10px 20px 20px" }}
            >
              {/* Category bubble */}
              <button
                type="button"
                onClick={(e) => handleCategoryClick(e, item.category)}
                className={`inline-block px-3 py-1 text-xs mb-3 hover:opacity-80 transition-opacity ${colors.bg} ${colors.text}`}
                style={{
                  fontFamily: "var(--font-geom)",
                  borderRadius: "50px 10px 50px 50px",
                }}
              >
                {item.category}
              </button>

              <h3 className="text-base text-deep-ocean mb-2" style={{ fontFamily: "var(--font-geom)" }}>
                {item.term}
              </h3>
              <p className="text-sm text-deep-ocean/70 leading-relaxed" style={{ fontFamily: "var(--font-geom)" }}>
                {item.definition}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-primary-teal hover:text-deep-ocean inline-flex items-center gap-1 transition-colors"
                  style={{ fontFamily: "var(--font-geom)" }}
                >
                  Learn more
                  <OpenNewWindow className="h-3 w-3" />
                </a>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-seafoam/30 p-6 text-center" style={{ borderRadius: "50px 10px 50px 50px" }}>
        <h3 className="text-lg text-deep-ocean mb-2" style={{ fontFamily: "var(--font-geom)" }}>
          What else would you like to see defined?
        </h3>
        <p className="text-deep-ocean/70 mb-4" style={{ fontFamily: "var(--font-geom)" }}>
          Help us expand our glossary with terms that matter to you.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-6 py-2.5 bg-deep-ocean text-seafoam text-sm hover:bg-deep-ocean/90 transition-colors"
          style={{
            fontFamily: "var(--font-geom)",
            borderRadius: "50px 10px 50px 50px",
          }}
        >
          Let us know
        </Link>
      </div>
    </div>
  )
}
