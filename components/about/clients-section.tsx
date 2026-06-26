"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "iconoir-react"

const years = ["Current", "2024", "2023", "2022", "2021", "2020"]

const clients = {
  Current: [
    {
      name: "COASTAL ENERGY PARTNERS",
      description:
        "A regional renewable energy consortium focused on offshore wind development and coastal community resilience programs.",
      location: "Portland, Maine",
      founded: "2019",
    },
    {
      name: "GREENWAVE MANUFACTURING",
      description:
        "Sustainable packaging manufacturer transitioning to 100% biodegradable materials with zero-waste production facilities.",
      location: "Austin, Texas",
      founded: "2015",
    },
    {
      name: "AZURE HOSPITALITY GROUP",
      description:
        "Boutique hotel chain implementing comprehensive sustainability programs across 12 properties in the Pacific Northwest.",
      location: "Seattle, Washington",
      founded: "2018",
    },
    {
      name: "TERRA FOODS COLLECTIVE",
      description:
        "Farm-to-table food distribution network supporting regenerative agriculture practices and carbon-neutral logistics.",
      location: "Denver, Colorado",
      founded: "2020",
    },
    {
      name: "MERIDIAN TECH SOLUTIONS",
      description:
        "Enterprise software company achieving carbon neutrality through renewable energy procurement and sustainable data center operations.",
      location: "San Francisco, California",
      founded: "2012",
    },
  ],
  "2024": [
    {
      name: "PACIFIC RIM LOGISTICS",
      description: "International shipping company implementing fleet electrification and sustainable port operations.",
      location: "Long Beach, California",
      founded: "2008",
    },
    {
      name: "VERDANT REAL ESTATE",
      description: "Commercial real estate developer specializing in LEED Platinum certified green buildings.",
      location: "Chicago, Illinois",
      founded: "2016",
    },
    {
      name: "BLUE HORIZON FISHERIES",
      description: "Sustainable aquaculture operation pioneering regenerative ocean farming practices.",
      location: "Monterey, California",
      founded: "2017",
    },
  ],
  "2023": [
    {
      name: "SUMMIT OUTDOOR GEAR",
      description: "Outdoor apparel company transitioning to 100% recycled materials and repair-first business model.",
      location: "Boulder, Colorado",
      founded: "2010",
    },
    {
      name: "NOVA CLEAN ENERGY",
      description: "Community solar developer bringing renewable energy access to underserved communities.",
      location: "Phoenix, Arizona",
      founded: "2019",
    },
  ],
  "2022": [
    {
      name: "HARBOR FINANCIAL GROUP",
      description: "Investment firm launching ESG-focused funds and sustainable finance initiatives.",
      location: "Boston, Massachusetts",
      founded: "2005",
    },
  ],
  "2021": [
    {
      name: "RIVERSTONE BREWING CO",
      description: "Craft brewery achieving water neutrality and implementing circular economy practices.",
      location: "Asheville, North Carolina",
      founded: "2014",
    },
  ],
  "2020": [
    {
      name: "CANOPY ARCHITECTURE",
      description: "Design firm specializing in biophilic design and net-zero building projects.",
      location: "Portland, Oregon",
      founded: "2011",
    },
  ],
}

export function ClientsSection() {
  const [activeYear, setActiveYear] = useState("Current")
  const [expandedClient, setExpandedClient] = useState<string | null>(null)

  const toggleClient = (name: string) => {
    setExpandedClient(expandedClient === name ? null : name)
  }

  return (
    <section className="relative bg-mist py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute top-20 -left-20 w-64 h-64 bg-seafoam/30 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 -right-20 w-80 h-80 bg-primary-teal/20 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p
            className="text-xs text-deep-ocean/60 tracking-widest mb-2"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
          >
            Our Partners
          </p>
          <div className="w-16 h-px bg-deep-ocean/40 mb-6" />
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-deep-ocean mb-4"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
          >
            Meet Our Clients
          </h2>
          <p
            className="text-base lg:text-lg text-deep-ocean/70 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
          >
            We partner with forward-thinking organizations committed to meaningful sustainability transformation.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                setActiveYear(year)
                setExpandedClient(null)
              }}
              className={`px-5 py-2.5 text-sm cursor-pointer transition-all duration-300 rounded-[25px_5px_25px_25px] ${
                activeYear === year
                  ? "bg-deep-ocean text-seafoam"
                  : "bg-white/60 backdrop-blur-sm text-deep-ocean/70 hover:bg-white/80 hover:text-deep-ocean border border-deep-ocean/10"
              }`}
              style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Client List */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {clients[activeYear as keyof typeof clients]?.map((client) => (
                <div
                  key={client.name}
                  className="bg-white/40 backdrop-blur-sm border border-deep-ocean/5 rounded-[20px_5px_20px_20px] overflow-hidden transition-all duration-300 hover:bg-white/60"
                >
                  <div
                    onClick={() => toggleClient(client.name)}
                    className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 group cursor-pointer"
                  >
                    <h3
                      className="text-xl md:text-2xl lg:text-3xl text-deep-ocean text-left tracking-tight leading-tight"
                      style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                    >
                      {client.name}
                    </h3>
                    <div
                      className={`w-8 h-8 bg-deep-ocean/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-deep-ocean group-hover:text-seafoam rounded-[15px_5px_15px_15px] ${
                        expandedClient === client.name ? "bg-deep-ocean" : ""
                      }`}
                    >
                      {expandedClient === client.name ? (
                        <Minus className="w-4 h-4 text-seafoam" strokeWidth={2} />
                      ) : (
                        <Plus className="w-4 h-4 text-deep-ocean group-hover:text-seafoam" strokeWidth={2} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedClient === client.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                          <div className="w-full h-px bg-deep-ocean/10 mb-4" />
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <p
                                className="text-xs text-deep-ocean/50 mb-1"
                                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                              >
                                Location
                              </p>
                              <p
                                className="text-sm text-deep-ocean"
                                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                              >
                                {client.location}
                              </p>
                            </div>
                            <div>
                              <p
                                className="text-xs text-deep-ocean/50 mb-1"
                                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                              >
                                Founded
                              </p>
                              <p
                                className="text-sm text-deep-ocean"
                                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                              >
                                {client.founded}
                              </p>
                            </div>
                            <div className="md:col-span-1">
                              <p
                                className="text-xs text-deep-ocean/50 mb-1"
                                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                              >
                                About
                              </p>
                              <p
                                className="text-sm text-deep-ocean/80 leading-relaxed"
                                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                              >
                                {client.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex justify-center">
          
        </div>
      </div>
    </section>
  )
}
