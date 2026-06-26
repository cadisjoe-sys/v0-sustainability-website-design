import { Marquee } from "@/components/marquee"

const topics = [
  "SUSTAINABILITY STRATEGY",
  "ESG REPORTING",
  "B CORP CERTIFICATION",
  "CARBON FOOTPRINT",
  "CLIMATE ACTION",
  "CIRCULAR ECONOMY",
  "SUPPLY CHAIN",
  "STAKEHOLDER ENGAGEMENT",
]

export function MarqueeSection() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-deep-ocean">
      <Marquee speed="slow">
        {topics.map((topic) => (
          <span
            key={topic}
            className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white/90 font-semibold"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {topic}
            <span className="inline-block mx-8 w-2 h-2 rounded-full bg-seafoam" />
          </span>
        ))}
      </Marquee>
    </section>
  )
}
