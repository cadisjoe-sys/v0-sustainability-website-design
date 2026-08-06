import { OpenNewWindow } from "iconoir-react"
import { ResourceEmptyState } from "./resource-empty-state"
import { matchesResourceFilters } from "./resource-filter"

interface CaseStudiesProps {
  searchQuery?: string
  activeFilters?: string[]
  onTagClick?: (tag: string) => void
  onClearFilters?: () => void
}

const caseStudies = [
  {
    company: "Sprouts Farmers Market",
    link: "https://www.sprouts.com/",
    tagline: "ESG Excellence Meets Financial Performance",
    description:
      'A grocery retailer demonstrating exceptional environmental, social, and governance (ESG) practices and strong financial results. A champion of better-for-you products and "purpose-driven people," Sprouts outperformed the market by 8%, with an average annual return of 19.5%, from 2015 to 2025.',
    highlights: [
      "No single-use bags at check-out: 75% of customers bring reusable or don't use a bag",
      "60% of 2024 sales came from socially or environmentally responsible products",
      "Diverted over 70mm pounds of food from landfill in 2024",
    ],
    tags: ["Reports", "Retail", "ESG Reporting", "Food Systems", "Waste"],
    impactReportLink: "https://www.sprouts.com/wp-content/uploads/2025/05/Sprouts-Impact-Report-2024_R.pdf",
  },
  {
    company: "Patagonia",
    link: "https://www.patagonia.com/",
    tagline: "Purpose-Driven Impact and Business Performance",
    description:
      "Patagonia stands apart for purpose-driven impact and business performance. Patagonia proves that embedding ESG and B Corp principles throughout a business sustains financial growth and generates tangible benefits for people and the planet. Certified as a B Corp since 2012, Patagonia's 2022 revenues surged 50% to approximately $1.5B as ownership transferred to the Patagonia Purpose Trust and Holdfast Collective, ensuring that nearly all net profits are devoted to environmental causes.",
    highlights: [
      "Operating at healthy gross profit margins of 50–55%",
      'Donated over $150 million to environmental groups through "1% for the Planet"',
      "Founding member of the Regenerative Organic Alliance",
    ],
    tags: ["Reports", "Consumer Products", "Textiles & Fashion", "ESG Reporting", "Circular Economy"],
  },
  {
    company: "Living Pastures Farm",
    link: "https://livingpasturesfarm.com/",
    tagline: "Regenerative Success",
    description:
      "Living Pastures Farm in Virginia uses regenerative agriculture with 100% grass-fed beef, pasture-raised chicken, and pork. They rotate livestock daily to boost soil and plant health. Click here to view the average impact on greenhouse gas emissions for 6 regenerative farms.",
    highlights: [
      "Daily livestock rotation regenerates soil, plants, and animal health",
      "Lower greenhouse gas emissions, better water retention, and increased biodiversity",
      "Premium pricing and more customers with in-demand, nutrient-dense products",
    ],
    tags: ["Reports", "Agriculture", "Food Systems", "Carbon"],
  },
]

export function getCaseStudiesResultCount(searchQuery = "", activeFilters: string[] = []) {
  return caseStudies.filter((study) =>
    matchesResourceFilters(
      `${study.company} ${study.tagline} ${study.description} ${study.highlights.join(" ")}`,
      study.tags,
      searchQuery,
      activeFilters,
    ),
  ).length
}

export function CaseStudies({ searchQuery = "", activeFilters = [], onTagClick, onClearFilters }: CaseStudiesProps) {
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault()
    e.stopPropagation()
    onTagClick?.(tag)
  }

  const filteredStudies = caseStudies.filter((study) =>
    matchesResourceFilters(
      `${study.company} ${study.tagline} ${study.description} ${study.highlights.join(" ")}`,
      study.tags,
      searchQuery,
      activeFilters,
    ),
  )

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl lg:text-3xl text-deep-ocean mb-3" style={{ fontFamily: "var(--font-geom)" }}>
          Case Studies
        </h2>
        <p className="text-deep-ocean/70" style={{ fontFamily: "var(--font-geom)" }}>
          Real-world examples of organizations achieving sustainability success.
        </p>
      </div>

      {filteredStudies.length === 0 && (
        <ResourceEmptyState
          description="No case studies match your search or filters. Try a broader search or reset the controls."
          onClearFilters={onClearFilters}
        />
      )}

      <div className="space-y-6">
        {filteredStudies.map((study) => (
          <div
            key={study.company}
            className="bg-white p-6 lg:p-8 border border-deep-ocean/10"
            style={{ borderRadius: "50px 10px 50px 50px" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl lg:text-2xl text-deep-ocean mb-1" style={{ fontFamily: "var(--font-geom)" }}>
                  {study.company}
                </h3>
                <p className="text-sm text-primary-teal mb-3" style={{ fontFamily: "var(--font-geom)" }}>
                  {study.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={(e) => handleTagClick(e, tag)}
                      className="px-3 py-1 bg-mist text-deep-ocean/70 text-xs hover:bg-seafoam hover:text-deep-ocean transition-colors"
                      style={{
                        fontFamily: "var(--font-geom)",
                        borderRadius: "20px 8px 20px 20px",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-seafoam text-deep-ocean text-sm hover:bg-seafoam/80 transition-colors"
                style={{
                  fontFamily: "var(--font-geom)",
                  borderRadius: "50px 10px 50px 50px",
                }}
              >
                Visit Website
                <OpenNewWindow className="h-4 w-4" />
              </a>
            </div>

            <p className="text-deep-ocean/80 leading-relaxed mb-6" style={{ fontFamily: "var(--font-geom)" }}>
              {study.description}
            </p>

            <div className="border border-deep-ocean/10 p-4" style={{ borderRadius: "20px 10px 20px 20px" }}>
              <h4 className="text-sm text-deep-ocean mb-3" style={{ fontFamily: "var(--font-geom)" }}>
                Why it Matters
              </h4>
              <ul className="space-y-2">
                {study.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-deep-ocean/70 flex items-start gap-2"
                    style={{ fontFamily: "var(--font-geom)" }}
                  >
                    <span className="text-primary-teal mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
