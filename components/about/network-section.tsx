"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    label: "Expert Network",
    description: "Access to experienced sustainability and business professionals across diverse industries.",
  },
  {
    label: "Sustainability Specialists",
    description: "Deep knowledge in different sustainability domains, from circular economy to ESG reporting.",
  },
  {
    label: "Best Value",
    description:
      "This flexible team model ensures Smoothsailing Sustainability clients get the best value for their investment.",
  },
]

export function NetworkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="network" className="relative py-24 lg:py-32 bg-seafoam overflow-hidden scroll-mt-32">
      <div
        className="absolute top-20 -left-20 w-72 h-72 bg-deep-ocean/10 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 -right-20 w-80 h-80 bg-primary-teal/20 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-12">
          <p
            className="text-xs text-deep-ocean/60 tracking-widest mb-3"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
          >
            Our Network
          </p>
          <div className="w-16 h-px bg-deep-ocean/40" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-3 space-y-8">
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl text-deep-ocean leading-tight"
              style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
            >
              Powered by Expert Collaboration
            </h2>
            <p
              className="text-base lg:text-lg text-deep-ocean/80 leading-relaxed max-w-xl"
              style={{
                fontFamily: "var(--font-geom), Geneva, sans-serif",
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.8s ease-out",
                transitionDelay: "0.3s",
              }}
            >
              Smoothsailing Sustainability draws on a broad network of experienced sustainability and business
              professionals, engaging them as needed to provide specialized expertise. This flexible team model ensures
              clients get the best value.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-[50px_10px_50px_50px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: "0.2s",
              }}
            >
              <img
                src="/images/lighthouse-illustration.jpeg"
                alt="Network collaboration"
                className="w-full h-full object-cover rounded-[50px_10px_50px_50px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-seafoam/30 to-transparent rounded-[50px_10px_50px_50px]" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.label}
              className="bg-deep-ocean/5 backdrop-blur-sm p-6 border border-deep-ocean/20 rounded-[20px_10px_20px_20px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${0.4 + idx * 0.15}s`,
              }}
            >
              <h3
                className="text-base font-medium text-deep-ocean mb-2"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                {feature.label}
              </h3>
              <p
                className="text-sm text-deep-ocean/60 leading-relaxed"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center"></div>
      </div>
    </section>
  )
}
