"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin } from "iconoir-react"
import { OrganicButton } from "@/components/ui/organic-button"

export function FounderSection() {
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
    <section ref={sectionRef} id="founder" className="relative py-24 lg:py-32 bg-mist overflow-hidden scroll-mt-32">
      <div
        className="absolute top-20 -left-20 w-64 h-64 bg-seafoam/20 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 -right-20 w-80 h-80 bg-primary-teal/15 blur-3xl rounded-[50px_10px_50px_50px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-xs text-deep-ocean/60 tracking-widest mb-3" style={{ fontFamily: "var(--font-geom)" }}>
            Leadership
          </p>
          <div className="w-16 h-px bg-deep-ocean/30 mb-6" />
          <h2 className="text-3xl lg:text-4xl text-deep-ocean" style={{ fontFamily: "var(--font-geom)" }}>
            Meet our founder
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Photo - 2 columns */}
          <div
            className="lg:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              transitionDelay: "0.2s",
            }}
          >
            <div className="relative max-w-sm lg:max-w-md">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-[50px_10px_50px_50px]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%282%29-s9XlMQDD1YbKJdfLaZkZAY8Bsr8xFh.jpeg"
                  alt="Lisa Bowers, Founder and President of Smoothsailing Sustainability"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Bio content - 3 columns */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
              transitionDelay: "0.4s",
            }}
          >
            <h3 className="text-3xl lg:text-4xl text-deep-ocean mb-2" style={{ fontFamily: "var(--font-geom)" }}>
              Lisa Bowers
            </h3>
            <p className="text-primary-teal text-sm tracking-wide mb-8" style={{ fontFamily: "var(--font-geom)" }}>
              Founder and President
            </p>

            <div
              className="space-y-5 text-base lg:text-lg text-stone leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-geom)" }}
            >
              <p>
                With a passion for building partnerships and driving positive change, Lisa brings over 20 years of
                experience guiding Fortune 500 companies and nonprofits to achieve their business goals. As Tuck
                Advisors' Sustainability Advisor, she helps purpose-driven companies achieve growth and sustainable
                impact through strategic M&A opportunities. As an Executive Council member and Skillanthropist for
                Bpeace (Business Council for Peace), she helps small- to medium-sized businesses create jobs and
                transform their communities.
              </p>
              <p>
                Lisa has held roles in marketing, brand management, and stakeholder engagement at the U.S. Green
                Building Council, National Geographic Entertainment, Revlon, and Nabisco. She was an Environmental
                Defense Fund Climate Corps Fellow for Live Nation Entertainment in 2024.
              </p>
              <p>
                Lisa's sustainability courses and project work have focused on circularity, food systems and social
                justice, sustainable investing, sustainability marketing, greenhouse gas accounting, and project
                management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white/60 backdrop-blur-sm p-5 border border-deep-ocean/10 rounded-[20px_10px_20px_20px]">
                <h4
                  className="text-xs text-deep-ocean/60 tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-geom)" }}
                >
                  Education
                </h4>
                <ul className="text-sm text-deep-ocean space-y-1.5" style={{ fontFamily: "var(--font-geom)" }}>
                  <li>Master's in Sustainability, Harvard Extension School</li>
                  <li>MBA, UCLA Anderson</li>
                  <li>BS in Finance, University of Virginia</li>
                </ul>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-5 border border-deep-ocean/10 rounded-[20px_10px_20px_20px]">
                <h4
                  className="text-xs text-deep-ocean/60 tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-geom)" }}
                >
                  Certifications
                </h4>
                <ul className="text-sm text-deep-ocean space-y-1.5" style={{ fontFamily: "var(--font-geom)" }}>
                  <li>LEED Green Associate</li>
                  <li>TRUE Zero Waste Advisor</li>
                </ul>
              </div>
            </div>

            <OrganicButton href="https://www.linkedin.com/in/lisabowers/" variant="primary" size="default">
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </OrganicButton>
          </div>
        </div>

        <div className="mt-20 flex justify-center"></div>
      </div>
    </section>
  )
}
