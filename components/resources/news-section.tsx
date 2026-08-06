"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import { ResourceEmptyState } from "./resource-empty-state"
import { matchesResourceFilters } from "./resource-filter"

interface NewsSectionProps {
  searchQuery?: string
  activeFilters?: string[]
  onTagClick?: (tag: string) => void
  onClearFilters?: () => void
}

const newsItems = [
  {
    date: "20 November 2025",
    title: "California Climate Disclosure Law Paused",
    description:
      "Sound environmental policy and legislation are key to sustainability. California's climate disclosure law faces new challenges.",
    link: "https://www.esgdive.com/news/ninth-circuit-court-halts-implementation-of-california-climate-law-sb-261/805848/",
    tags: ["Articles", "Policy", "Regulation"],
    image: "/california-state-building-government-policy.jpg",
    featured: false,
  },
  {
    date: "19 November 2025",
    title: "Motors That Don't Rely on Chinese Rare Earths",
    description: "The electricity transition's dependency on rare earths could change with new motor technology.",
    link: "https://spectrum.ieee.org/ev-motor",
    tags: ["Articles", "EV", "Innovation"],
    image: "/electric-vehicle-motor-technology-green.jpg",
    featured: false,
  },
  {
    date: "08 June 2025",
    title: "Every Decision is a Climate Decision",
    description:
      "Climate Leader Katharine Hayhoe shares insights on how every business decision impacts our climate future and why sustainability matters now more than ever.",
    link: "https://www.reblueventures.com/blog/interview-with-katharine-hayhoe",
    tags: ["Podcasts", "Climate Action", "Leadership"],
    image: "/climate-leader-speaking-sustainability-conference.jpg",
    featured: true,
  },
]

export function getNewsResultCount(searchQuery = "", activeFilters: string[] = []) {
  return newsItems.filter((item) =>
    matchesResourceFilters(`${item.title} ${item.description}`, item.tags, searchQuery, activeFilters),
  ).length
}

export function NewsSection({ searchQuery = "", activeFilters = [], onTagClick, onClearFilters }: NewsSectionProps) {
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault()
    e.stopPropagation()
    onTagClick?.(tag)
  }

  const filteredItems = newsItems.filter((item) =>
    matchesResourceFilters(`${item.title} ${item.description}`, item.tags, searchQuery, activeFilters),
  )

  const featuredItem = filteredItems.find((item) => item.featured)
  const regularItems = filteredItems.filter((item) => !item.featured)

  return (
    <div>
      <AnimateOnScroll>
        <div className="mb-10">
          <h2 className="text-2xl lg:text-3xl text-deep-ocean mb-3" style={{ fontFamily: "var(--font-geom)" }}>
            What's New
          </h2>
          <p className="text-deep-ocean/70" style={{ fontFamily: "var(--font-geom)" }}>
            The latest sustainability news and insights.
          </p>
        </div>
      </AnimateOnScroll>

      {filteredItems.length === 0 && (
        <ResourceEmptyState
          description="No news items match your search or filters. Try a broader search or reset the controls."
          onClearFilters={onClearFilters}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - regular items */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {regularItems.map((item, idx) => (
            <AnimateOnScroll key={idx} delay={idx * 100}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden mb-4 border border-deep-ocean/10"
                  style={{ borderRadius: "50px 10px 50px 50px" }}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={(e) => handleTagClick(e, tag)}
                        className="px-3 py-1 bg-deep-ocean text-seafoam text-xs hover:bg-primary-teal transition-colors"
                        style={{
                          fontFamily: "var(--font-geom)",
                          borderRadius: "20px 10px 20px 20px",
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <h3
                  className="text-lg text-deep-ocean group-hover:text-primary-teal transition-colors mb-2"
                  style={{ fontFamily: "var(--font-geom)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-deep-ocean/60 tracking-wider" style={{ fontFamily: "var(--font-geom)" }}>
                  {item.date}
                </p>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Right column - featured */}
        {featuredItem && (
          <AnimateOnScroll delay={200} className="lg:col-span-1">
            <a href={featuredItem.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <div
                className="relative aspect-[3/4] lg:aspect-auto lg:h-[400px] overflow-hidden mb-4 border border-deep-ocean/10"
                style={{ borderRadius: "50px 10px 50px 50px" }}
              >
                <img
                  src={featuredItem.image || "/placeholder.svg"}
                  alt={featuredItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {featuredItem.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={(e) => handleTagClick(e, tag)}
                      className="px-3 py-1 bg-seafoam text-deep-ocean text-xs hover:bg-primary-teal hover:text-seafoam transition-colors"
                      style={{
                        fontFamily: "var(--font-geom)",
                        borderRadius: "20px 10px 20px 20px",
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <h3
                className="text-2xl text-deep-ocean group-hover:text-primary-teal transition-colors mb-3"
                style={{ fontFamily: "var(--font-geom)" }}
              >
                {featuredItem.title}
              </h3>
              <p className="text-deep-ocean/70 leading-relaxed mb-4" style={{ fontFamily: "var(--font-geom)" }}>
                {featuredItem.description}
              </p>
              <p className="text-xs text-deep-ocean/60 tracking-wider" style={{ fontFamily: "var(--font-geom)" }}>
                {featuredItem.date}
              </p>
            </a>
          </AnimateOnScroll>
        )}
      </div>
    </div>
  )
}
