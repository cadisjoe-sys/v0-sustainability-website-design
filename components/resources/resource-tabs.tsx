"use client"

import { useState, useEffect } from "react"
import { NewsSection } from "./news-section"
import { CaseStudies } from "./case-studies"
import { BestPractices } from "./best-practices"
import { Glossary } from "./glossary"
import { Search, X } from "lucide-react"

type TabComponent = React.ComponentType<{
  searchQuery?: string
  activeFilters?: string[]
  onTagClick?: (tag: string) => void
}>

const tabs: { id: string; label: string; component: TabComponent }[] = [
  { id: "news", label: "What's New", component: NewsSection },
  { id: "case-studies", label: "Case Studies", component: CaseStudies },
  { id: "best-practices", label: "Best Practices & Research", component: BestPractices },
  { id: "glossary", label: "Sustainability Concepts & Terms", component: Glossary },
]

const validTabIds = tabs.map((t) => t.id)

const filterCategories = [
  {
    id: "topics",
    label: "Topics",
    options: [
      "Carbon",
      "Circular Economy",
      "Climate Action",
      "Climate Justice",
      "Electrification",
      "ESG Reporting",
      "EV",
      "Food Systems",
      "Forest Management",
      "Innovation",
      "Policy",
      "Regulation",
      "Renewable Energy",
      "Supply Chain",
      "Waste",
    ],
  },
  {
    id: "industries",
    label: "Industries",
    options: [
      "Agriculture",
      "Consumer Products",
      "Energy",
      "Finance",
      "Green Buildings",
      "Healthcare",
      "Manufacturing",
      "Plastics",
      "Retail",
      "Technology",
      "Textiles & Fashion",
    ],
  },
  {
    id: "content-type",
    label: "Content Type",
    options: ["Articles", "Blogs", "Guides", "Podcasts", "Reports", "Videos"],
  },
]

export function ResourceTabs() {
  const [activeTab, setActiveTab] = useState("news")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // Open the tab referenced by the URL hash (e.g. /resources#case-studies)
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (validTabIds.includes(hash)) {
        setActiveTab(hash)
      }
    }
    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component || NewsSection

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  // Clicking a tag on a card adds it as an active filter (without removing it if clicked again)
  const addFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev : [...prev, filter]))
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const clearAllFilters = () => {
    setActiveFilters([])
    setSearchQuery("")
  }

  return (
    <section className="py-20 lg:py-28 bg-mist relative overflow-hidden">
      {/* Decorative Style-M shapes */}
      <div
        className="absolute top-40 -right-20 w-64 h-64 bg-seafoam/30 blur-3xl"
        style={{ borderRadius: "50px 10px 50px 50px" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 -left-20 w-48 h-48 bg-primary-teal/20 blur-3xl"
        style={{ borderRadius: "50px 10px 50px 50px" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header with label */}
        <div className="mb-8">
          <p className="text-xs text-deep-ocean/60 tracking-widest mb-3" style={{ fontFamily: "var(--font-geom)" }}>
            Explore Resources
          </p>
          <div className="w-16 h-px bg-deep-ocean/30" />
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          {/* Search Input */}
          <div className="relative mb-6">
            <div
              className="flex items-center bg-white/80 backdrop-blur-sm border border-deep-ocean/10 overflow-hidden"
              style={{ borderRadius: "50px 10px 50px 50px" }}
            >
              <div className="pl-5 pr-3 text-deep-ocean/40">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-4 pr-5 bg-transparent text-deep-ocean placeholder:text-deep-ocean/40 focus:outline-none"
                style={{ fontFamily: "var(--font-geom)" }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="pr-5 text-deep-ocean/40 hover:text-deep-ocean transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3 mb-4">
            {filterCategories.map((category) => (
              <div key={category.id} className="relative">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className={`px-4 py-2 text-sm border transition-all flex items-center gap-2 ${
                    expandedCategory === category.id || activeFilters.some((f) => category.options.includes(f))
                      ? "bg-deep-ocean text-seafoam border-deep-ocean"
                      : "bg-white/60 text-deep-ocean border-deep-ocean/10 hover:bg-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-geom)",
                    borderRadius: "50px 10px 50px 50px",
                  }}
                >
                  {category.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedCategory === category.id ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                {expandedCategory === category.id && (
                  <div
                    className="absolute top-full left-0 mt-2 p-3 bg-white shadow-lg border border-deep-ocean/10 z-20 min-w-[200px]"
                    style={{ borderRadius: "20px 10px 20px 20px" }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {category.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter(option)}
                          className={`px-3 py-1.5 text-xs transition-all ${
                            activeFilters.includes(option)
                              ? "bg-seafoam text-deep-ocean"
                              : "bg-mist text-deep-ocean/70 hover:bg-seafoam/30"
                          }`}
                          style={{
                            fontFamily: "var(--font-geom)",
                            borderRadius: "30px 8px 30px 30px",
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Filters Display */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-deep-ocean/50" style={{ fontFamily: "var(--font-geom)" }}>
                Active filters:
              </span>
              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className="px-3 py-1 text-xs bg-seafoam text-deep-ocean flex items-center gap-1.5 hover:bg-seafoam/80 transition-colors"
                  style={{
                    fontFamily: "var(--font-geom)",
                    borderRadius: "30px 8px 30px 30px",
                  }}
                >
                  {filter}
                  <X className="w-3 h-3" />
                </button>
              ))}
              <button
                onClick={clearAllFilters}
                className="text-xs text-deep-ocean/50 hover:text-deep-ocean underline transition-colors ml-2"
                style={{ fontFamily: "var(--font-geom)" }}
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <nav className="flex flex-wrap gap-3 mb-12 pt-4 border-t border-deep-ocean/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-sm transition-all ${
                activeTab === tab.id ? "bg-deep-ocean text-seafoam" : "bg-white/60 text-deep-ocean hover:bg-white"
              }`}
              style={{
                fontFamily: "var(--font-geom)",
                borderRadius: "50px 10px 50px 50px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div id={activeTab}>
          <ActiveComponent searchQuery={searchQuery} activeFilters={activeFilters} onTagClick={addFilter} />
        </div>
      </div>
    </section>
  )
}
