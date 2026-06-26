"use client"

import { useEffect, useState } from "react"

export function ServicesHero() {
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
            {/* Label with divider */}
            <div
              className="mb-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <p className="text-xs text-deep-ocean/60 tracking-widest mb-3" style={{ fontFamily: "var(--font-geom)" }}>
                What We Do
              </p>
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
              Custom Solutions for Your{" "}
              <span className="inline-flex items-baseline gap-3">
                Journey
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
              Smoothsailing Sustainability creates custom solutions tailored to your organization&apos;s unique needs,
              whether you are a start-up or a Fortune 100 company.
            </p>

            {/* Navigation links */}
            <div
              className="flex flex-wrap gap-3"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: "0.3s",
              }}
            >
              {[
                { label: "Strategy", href: "#strategy" },
                { label: "Compliance", href: "#compliance" },
                { label: "Competitive Edge", href: "#competitive" },
                { label: "Operations", href: "#operations" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 bg-deep-ocean text-seafoam text-sm transition-all hover:bg-deep-ocean/90"
                  style={{
                    fontFamily: "var(--font-geom)",
                    borderRadius: "50px 10px 50px 50px",
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Style-M shaped image - spans 2 columns */}
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
              <img
                src="/images/generated-20image-20december-2012-2c-202025-20-209-07am.jpeg"
                alt="Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/20 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
