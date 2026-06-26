"use client"

import { useEffect, useRef, useState } from "react"

export function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [inView, setInView] = useState(false)
  const [visibleWordIndex, setVisibleWordIndex] = useState(-1)
  const [hasAnimated, setHasAnimated] = useState(false)

  const words = [
    "We",
    "help",
    "organizations",
    "navigate",
    "a",
    "path",
    "to",
    "a",
    "resilient",
    "and",
    "sustainable",
    "future",
    "so",
    "all",
    "businesses",
    "can",
    "thrive",
    "without",
    "degrading",
    "or",
    "depleting",
    "limited",
    "natural",
    "resources.",
  ]

  const easeInOutQuad = (x: number): number => {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            let currentIndex = -1
            const interval = setInterval(() => {
              currentIndex++
              setVisibleWordIndex(currentIndex)
              if (currentIndex >= words.length - 1) {
                clearInterval(interval)
              }
            }, 50) // Faster sequential reveal - 50ms per word

            return () => clearInterval(interval)
          }
        })
      },
      { threshold: 0.3 }, // Trigger when 30% of section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, words.length])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const sectionTop = rect.top
      const sectionHeight = rect.height

      if (rect.top < windowHeight && rect.bottom > 0) {
        setInView(true)
      } else {
        setInView(false)
      }

      if (sectionTop <= 0 && sectionTop > -sectionHeight + windowHeight) {
        const scrolledThrough = Math.abs(sectionTop)
        const totalScrollable = sectionHeight - windowHeight
        const rawProgress = Math.min(Math.max(scrolledThrough / totalScrollable, 0), 1)
        setProgress(easeInOutQuad(rawProgress))
      } else if (sectionTop > 0) {
        setProgress(0)
      } else {
        setProgress(1)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-gradient-to-b from-deep-ocean via-deep-ocean to-primary-teal overflow-hidden"
    >
      <div className="sticky top-1/4 mx-auto px-2 sm:px-4 lg:px-8 max-w-[calc(100%-1rem)] sm:max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)]">
        {/* Label with line */}
        <div
          className="mb-16"
          style={{
            opacity: inView ? 1 : 0,
            filter: `blur(${inView ? 0 : 10}px)`,
            transform: `translateY(${inView ? 0 : 20}px)`,
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="w-32 h-px bg-white/30 mb-4" />
          <p className="text-sm text-white/60 tracking-wide">The Case for Sustainability</p>
        </div>

        <div
          className="mb-8"
          style={{
            opacity: inView ? 1 : 0,
            filter: `blur(${inView ? 0 : 10}px)`,
            transform: `translateY(${inView ? 0 : 20}px)`,
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
          }}
        >
          <p className="text-base lg:text-lg text-white/50 max-w-2xl leading-relaxed">
            Businesses that integrate sustainable practices enjoy higher sales growth, better stock performance, lower
            capital costs, and increased customer retention.
          </p>
        </div>

        <div
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-snug max-w-4xl mb-16"
          style={{
            opacity: inView ? 1 : 0,
            filter: `blur(${inView ? 0 : 12}px)`,
            transform: `translateY(${inView ? 0 : 30}px)`,
            transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <p className="text-balance" style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
            {words.map((word, index) => {
              const isVisible = index <= visibleWordIndex
              const wordDelay = (index - visibleWordIndex) * 0.05 // Stagger for smoother appearance

              return (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    marginRight: "0.35em", // Consistent spacing relative to font size
                    color: isVisible ? "rgba(127, 191, 181, 1)" : "rgba(255, 255, 255, 0.2)",
                    opacity: isVisible ? 1 : 0.3,
                    transform: `translateY(${isVisible ? 0 : 8}px)`,
                    transition: "all 0.4s ease-out",
                    transitionDelay: isVisible ? "0s" : `${wordDelay}s`,
                  }}
                >
                  {word}{" "}
                </span>
              )
            })}
          </p>
        </div>



        <div
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          style={{
            opacity: inView ? Math.min(progress * 1.8, 1) : 0,
            filter: `blur(${inView && progress > 0.25 ? 0 : 8}px)`,
            transform: `translateY(${inView && progress > 0.25 ? 0 : 20}px)`,
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
          }}
        >
          <div className="border-l border-seafoam/30 pl-4">
            <h3 className="text-seafoam text-lg lg:text-xl mb-2">Strategy</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              We develop tailored roadmaps that align sustainability goals with business objectives, ensuring long-term
              viability.
            </p>
          </div>
          <div className="border-l border-seafoam/30 pl-4">
            <h3 className="text-seafoam text-lg lg:text-xl mb-2">Implementation</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              From carbon audits to supply chain transformation, we guide every step of your sustainability journey.
            </p>
          </div>
          <div className="border-l border-seafoam/30 pl-4">
            <h3 className="text-seafoam text-lg lg:text-xl mb-2">Measurement</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Transparent reporting and data-driven insights demonstrate your progress and build stakeholder trust.
            </p>
          </div>
        </div>


      </div>
    </section>
  )
}
