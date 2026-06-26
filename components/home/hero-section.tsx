"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { OrganicButton } from "@/components/ui/organic-button"
import { STYLE_M } from "@/lib/style-m"

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      const scrollStart = windowHeight * 0.3
      const scrollEnd = sectionHeight - windowHeight * 0.5
      const rawProgress = (scrollStart - sectionTop) / scrollEnd
      const progress = Math.max(0, Math.min(1, rawProgress))

      setScrollProgress(progress)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  const textProgress = Math.max(0, (scrollProgress - 0.4) / 0.6)
  const textOpacity = textProgress
  const textTranslateY = (1 - textProgress) * 50

  return (
    <section ref={sectionRef} className="relative min-h-[150vh] overflow-hidden bg-deep-ocean pt-20 pb-24">
      <div className="sticky top-20 mx-auto w-full">
        <div
          className="mx-4 sm:mx-6 lg:mx-8 mb-16 lg:mb-24"
          style={{
            opacity: Math.min(1, scrollProgress * 2),
            transform: `translateY(${(1 - Math.min(1, scrollProgress * 2)) * 30}px)`,
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
          }}
        >
          <div
            className={`relative overflow-hidden w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] ${STYLE_M}`}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-100 scale-110"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kling_20260402_%E4%BD%9C%E5%93%81_shot_1_7s__2709_0-2%20%281%29-3XbuXPfyiFKWkLOuGSSskF7Y7SBrXY.mp4"
            />
          </div>
        </div>

        <div
          className="mx-auto max-w-4xl px-6 lg:px-12 text-center space-y-8"
          style={{
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-relaxed text-balance"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
          >
            Let's chart your course to a resilient, profitable, and sustainable future.
          </h1>

          <div className="flex flex-col items-center gap-4">
            <Link href="/contact">
              <OrganicButton variant="secondary" size="lg">
                Let's talk
              </OrganicButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
