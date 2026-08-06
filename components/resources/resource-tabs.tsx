"use client"

import { useEffect, useState } from "react"
import { Search, X } from "lucide-react"
import { BestPractices } from "./best-practices"
import { CaseStudies } from "./case-studies"
import { Glossary } from "./glossary"
import { NewsSection } from "./news-section"

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

const filterGroups = [
  {
    id: "content-type",
    label: "Content type",
    options: ["Articles", "Guides", "Podcasts", "Reports", "Videos"],
  },
  {
    id: "topics",
    label: "Topic",
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
    label: "Industry",
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
]

const validTabIds = tabs.map((tab) => tab.id)

export function ResourceTabs() {
  const [activeTab, setActiveTab] = useState("news")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "")
      if (validTabIds.includes(hash)) setActiveTab(hash)
    }

    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component ?? NewsSection
  const hasFilters = activeFilters.length > 0 || searchQuery.length > 0

  const toggleFilter = (filter: string) => {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter],
    )
  }

  const addFilter = (filter: string) => {
    setActiveFilters((current) => (current.includes(filter) ? current : [...current, filter]))
    document.getElementById("resource-filters")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const clearAllFilters = () => {
    setActiveFilters([])
    setSearchQuery("")
  }

  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-8">
          <p className="mb-3 text-xs tracking-widest text-deep-ocean/60" style={{ fontFamily: "var(--font-geom)" }}>
            Explore Resources
          </p>
          <div className="h-px w-16 bg-deep-ocean/30" />
        </div>

        <div id="resource-filters" className="scroll-mt-28 rounded-[40px_10px_40px_40px] border border-deep-ocean/10 bg-white/70 p-5 backdrop-blur-sm lg:p-7">
          <label htmlFor="resource-search" className="mb-2 block text-sm font-medium text-deep-ocean">
            Search the Resource Hub
          </label>
          <div className="flex items-center rounded-[50px_10px_50px_50px] border border-deep-ocean/15 bg-white">
            <Search className="ml-5 size-5 text-deep-ocean/40" aria-hidden="true" />
            <input
              id="resource-search"
              type="search"
              placeholder="Search titles, topics, and descriptions"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="min-w-0 flex-1 bg-transparent px-3 py-4 text-deep-ocean outline-none placeholder:text-deep-ocean/40"
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery("")} className="mr-4 rounded-full p-2 text-deep-ocean/50 hover:bg-mist hover:text-deep-ocean" aria-label="Clear search">
                <X className="size-4" />
              </button>
            )}
          </div>

          <div className="mt-7 flex flex-col gap-6">
            {filterGroups.map((group) => (
              <fieldset key={group.id} className="flex flex-col gap-3">
                <legend className="text-sm font-medium text-deep-ocean">{group.label}</legend>
                <div className="flex flex-wrap gap-2">
                  {group.options.map((option) => {
                    const selected = activeFilters.includes(option)
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleFilter(option)}
                        className={`rounded-[30px_8px_30px_30px] border px-3 py-2 text-sm transition-colors ${selected ? "border-deep-ocean bg-deep-ocean text-seafoam" : "border-deep-ocean/15 bg-mist text-deep-ocean hover:border-primary-teal"}`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="mt-6 flex min-h-9 flex-wrap items-center justify-between gap-3 border-t border-deep-ocean/10 pt-5" aria-live="polite">
            <p className="text-sm text-deep-ocean/60">
              {hasFilters ? `${activeFilters.length} filter${activeFilters.length === 1 ? "" : "s"} selected${searchQuery ? " plus search" : ""}` : "Showing all resources"}
            </p>
            {hasFilters && (
              <button type="button" onClick={clearAllFilters} className="inline-flex items-center gap-2 text-sm font-medium text-deep-ocean underline underline-offset-4 hover:text-primary-teal">
                <X className="size-4" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>
        </div>

        <nav aria-label="Resource sections" className="mb-12 mt-8 flex flex-wrap gap-3 border-t border-deep-ocean/10 pt-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id)
                window.history.replaceState(null, "", `#${tab.id}`)
              }}
              aria-pressed={activeTab === tab.id}
              className={`rounded-[50px_10px_50px_50px] px-5 py-2.5 text-sm transition-colors ${activeTab === tab.id ? "bg-deep-ocean text-seafoam" : "bg-white/60 text-deep-ocean hover:bg-white"}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div id={activeTab}>
          <ActiveComponent searchQuery={searchQuery} activeFilters={activeFilters} onTagClick={addFilter} />
        </div>
      </div>
    </section>
  )
}
