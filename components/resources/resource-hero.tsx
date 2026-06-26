"use client"

import { useEffect, useState } from "react"

export function ResourceHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative py-24 lg:py-40 bg-seafoam overflow-hidden">
      {/* Decorative Style-M shapes */}
      <div
        className="absolute top-20 right-10 w-64 h-64 bg-deep-ocean/10 opacity-40 blur-3xl"
        style={{ borderRadius: "50px 10px 50px 50px" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-48 h-48 bg-primary-teal/20 opacity-30 blur-3xl"
        style={{ borderRadius: "50px 10px 50px 50px" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Content - spans 3 columns */}
          <div className="lg:col-span-3">
            {/* Divider */}
            <div
              className="mb-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <div className="w-16 h-px bg-deep-ocean/30" />
            </div>

            {/* Large heading with inline Style-M shape */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-deep-ocean leading-[1.1] mb-8"
              style={{
                fontFamily: "var(--font-geom)",
                fontWeight: 400,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition:
                  "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "0.1s",
              }}
            >
              Sustainability Resource{" "}
              <span className="inline-flex items-baseline gap-3">
                Hub
                <span
                  className="inline-block w-8 h-8 lg:w-12 lg:h-12 bg-primary-teal/30"
                  style={{ borderRadius: "50px 10px 50px 50px" }}
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-lg lg:text-xl text-deep-ocean/80 leading-relaxed max-w-2xl mb-10"
              style={{
                fontFamily: "var(--font-geom)",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: "0.2s",
              }}
            >
              Welcome to our Sustainability Resource Hub — a curated collection of case studies, best practices,
              research, and sustainability concepts. We update often with content from the Smoothsailing Sustainability
              network. We invite your suggestions and feedback.
            </p>

            {/* Navigation links */}
          </div>

          {/* Right: Style-M shaped image placeholder - spans 2 columns */}
          <div
            className="lg:col-span-2"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: "0.2s",
            }}
          >
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: "50px 10px 50px 50px" }}>
              <img src="/images/ocean-future-summit.jpeg" alt="Resource Hub" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/20 to-transparent" aria-hidden="true" />
            </div>

            {/* Aspiration banner */}
            <div
              className="mt-6 border-2 border-primary-teal bg-white/40 px-6 py-5"
              style={{ borderRadius: "10px 40px 10px 40px" }}
            >
              <p
                className="text-base lg:text-lg text-deep-ocean leading-relaxed text-balance"
                style={{ fontFamily: "var(--font-geom)" }}
              >
                Learning. Thinking. Observing. Progressing toward a world where all living things can flourish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
