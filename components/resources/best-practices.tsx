import { OpenNewWindow } from "iconoir-react"
import { matchesResourceFilters } from "./resource-filter"

interface BestPracticesProps {
  searchQuery?: string
  activeFilters?: string[]
  onTagClick?: (tag: string) => void
}

const categories = [
  {
    title: "Sustainability as a Business Driver",
    items: [
      {
        title: "Sustainability Rises in Leadership Priorities",
        description:
          "Sustainability jumped from 9th to 4th for 2026 in a list of emerging trends receiving leadership attention.",
        link: "https://www.deloitte.com/us/en/insights/topics/leadership/building-organizational-resilience.html",
        source: "Deloitte Global Board and C-suite Resilience Survey",
        tags: ["Articles", "Leadership", "Trends"],
      },
    ],
  },
  {
    title: "Green Workforce",
    items: [
      {
        title: "Green Jobs Growth",
        description: "Green jobs are growing, with a hiring rate 47% higher than jobs overall.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7394822117692903424/",
        tags: ["Articles", "Green Jobs", "Skills"],
      },
    ],
  },
  {
    title: "Marketing & Communications",
    items: [
      {
        title: "Communications Toolkit for Navigating Chaos",
        description:
          "B The Change provides 5 tips for organizations on how to communicate effectively in times of uncertainty.",
        link: "https://bthechange.com/the-navigating-chaos-toolkit-fcacbaaae1e9",
        tags: ["Guides", "Crisis Communications", "Nudges"],
      },
      {
        title: "Green Nudges",
        description:
          'Nudges can be most effective in driving action. Examples of "green nudges" can be found here.',
        link: "https://www.green-nudges.com/",
        tags: ["Guides", "Behavior Change", "Marketing"],
      },
    ],
  },
  {
    title: "Change Management",
    items: [
      {
        title: "Making Change Stick",
        description:
          "Prosci offers 8 tips for effectively managing sustainability changes, including: Walk the talk, Communicate the 'Why', and Start small and think long-term.",
        link: "https://www.prosci.com/blog/change-management-for-sustainability",
        tags: ["Articles", "Change Management", "Leadership"],
      },
    ],
  },
]

export function BestPractices({ searchQuery = "", activeFilters = [], onTagClick }: BestPracticesProps) {
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault()
    e.stopPropagation()
    onTagClick?.(tag)
  }

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        matchesResourceFilters(`${item.title} ${item.description}`, item.tags, searchQuery, activeFilters),
      ),
    }))
    .filter((category) => category.items.length > 0)

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl lg:text-3xl text-deep-ocean mb-3" style={{ fontFamily: "var(--font-geom)" }}>
          Evidence and Frameworks
        </h2>
        <p className="text-deep-ocean/70" style={{ fontFamily: "var(--font-geom)" }}>
          Curated insights and research to guide your sustainability initiatives.
        </p>
      </div>

      {filteredCategories.length === 0 && (
        <div
          className="border border-deep-ocean/10 bg-white px-6 py-12 text-center"
          style={{ borderRadius: "40px 10px 40px 40px" }}
        >
          <p className="text-deep-ocean/60" style={{ fontFamily: "var(--font-geom)" }}>
            No research or best practices match your search or filters. Try adjusting them or clearing all filters.
          </p>
        </div>
      )}

      <div className="space-y-10">
        {filteredCategories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-primary-teal" style={{ borderRadius: "50px 10px 50px 50px" }} />
              <h3 className="text-lg text-deep-ocean" style={{ fontFamily: "var(--font-geom)" }}>
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-5 border border-deep-ocean/10"
                  style={{ borderRadius: "20px 10px 20px 20px" }}
                >
                  <h4 className="text-base text-deep-ocean mb-2" style={{ fontFamily: "var(--font-geom)" }}>
                    {item.title}
                  </h4>
                  <p
                    className="text-sm text-deep-ocean/70 leading-relaxed mb-3"
                    style={{ fontFamily: "var(--font-geom)" }}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={(e) => handleTagClick(e, tag)}
                        className="text-xs border border-deep-ocean/20 text-deep-ocean/60 px-2 py-1 hover:bg-seafoam hover:text-deep-ocean hover:border-seafoam transition-colors"
                        style={{
                          fontFamily: "var(--font-geom)",
                          borderRadius: "10px 5px 10px 10px",
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-teal hover:text-deep-ocean inline-flex items-center gap-1 transition-colors"
                      style={{ fontFamily: "var(--font-geom)" }}
                    >
                      Read more
                      <OpenNewWindow className="h-3 w-3" />
                    </a>
                  )}
                  {item.source && !item.link && (
                    <p className="text-xs text-deep-ocean/50" style={{ fontFamily: "var(--font-geom)" }}>
                      Source: {item.source}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
