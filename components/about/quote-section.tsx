"use client"

import { useEffect, useRef, useState } from "react"

export function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  const quoteWords =
    "For years, we believed that even if we reached net zero emissions, the planet would still keep warming. But new research turned that on its head: if we reach net zero, global temperatures will stabilize within a few years. Our actions now don't just help future generations—they help us.".split(
      " ",
    )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setWordIndex((prev) => {
        if (prev >= quoteWords.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 80)

    return () => clearInterval(interval)
  }, [isVisible, quoteWords.length])

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative py-32 lg:py-48 bg-deep-ocean overflow-hidden scroll-mt-32"
    >
      <div
        className="absolute -top-20 -right-20 w-80 h-80 bg-seafoam/5 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Large quotation mark */}
          <div className="lg:col-span-2 flex items-start">
            <span
              className="text-[150px] lg:text-[200px] leading-none text-seafoam/20 select-none"
              style={{
                fontFamily: "Georgia, serif",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              }}
              aria-hidden="true"
            >
              "
            </span>
          </div>

          {/* Right side - Quote content */}
          <div className="lg:col-span-10">


            {/* Quote with word-by-word animation */}
            <blockquote className="mb-12">
              <p
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
              >
                {quoteWords.map((word, index) => (
                  <span
                    key={index}
                    className="inline-block mr-[0.3em] transition-all duration-300"
                    style={{
                      opacity: index < wordIndex ? 1 : 0.2,
                      color: index < wordIndex ? "#7FBFB5" : "rgba(255,255,255,0.3)",
                      transform: index < wordIndex ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </blockquote>

            {/* Attribution with animated line */}
            <div
              className="flex items-center gap-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.8s ease-out 1.5s, transform 0.8s ease-out 1.5s",
              }}
            >
              <div
                className="h-px bg-seafoam/60 transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? "60px" : "0px",
                  transitionDelay: "1.5s",
                }}
              />
              <div>
                <p
                  className="text-lg text-seafoam font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                >
                  Katharine Hayhoe
                </p>
                <p className="text-sm text-white/50" style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}>
                  Climate Scientist & Communicator
                </p>
                <p className="text-sm text-white/40" style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}>
                  May 12, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-seafoam/30 to-transparent" />
    </section>
  )
}
