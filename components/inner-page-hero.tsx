"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface NavItem {
  label: string
  href: string
}

interface InnerPageHeroProps {
  label: string
  title: string
  description: string
  navItems?: NavItem[]
  ctaText?: string
  ctaHref?: string
  variant?: "seafoam" | "ocean" | "cloud"
}

export function InnerPageHero({
  label,
  title,
  description,
  navItems,
  ctaText,
  ctaHref,
  variant = "seafoam",
}: InnerPageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const bgColors = {
    seafoam: "bg-seafoam",
    ocean: "bg-ocean",
    cloud: "bg-cloud",
  }

  const textColors = {
    seafoam: "text-deep-ocean",
    ocean: "text-white",
    cloud: "text-deep-ocean",
  }

  const labelColors = {
    seafoam: "text-deep-ocean/70",
    ocean: "text-seafoam",
    cloud: "text-ocean",
  }

  return (
    <section className={`${bgColors[variant]} min-h-[85vh] lg:min-h-screen pt-24 lg:pt-32`}>
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Abstract Geometric Illustration */}
          <div
            className="relative hidden lg:flex items-center justify-center py-12"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: "0.2s",
            }}
          >
            {/* Abstract sailboat/wave geometric shape */}
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Main sail triangle */}
              <div
                className="absolute top-0 right-1/4 w-2/5 h-3/4 bg-deep-ocean"
                style={{
                  clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
                }}
              />
              {/* Secondary sail */}
              <div
                className="absolute top-[15%] right-[10%] w-1/3 h-1/2 bg-deep-ocean"
                style={{
                  clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                }}
              />
              {/* Wave arch 1 */}
              <div className="absolute bottom-[15%] left-0 w-1/3 h-2/5 bg-deep-ocean rounded-t-full" />
              {/* Wave arch 2 */}
              <div
                className="absolute bottom-0 right-[20%] w-2/5 h-1/3 bg-deep-ocean"
                style={{
                  borderRadius: "0 100px 0 0",
                }}
              />
              {/* Angular cutout accent */}
              <div
                className="absolute bottom-[25%] right-0 w-1/4 h-1/4 bg-deep-ocean"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="py-8 lg:py-16">
            {/* Label */}
            <p
              className={`text-xs font-bold uppercase tracking-[0.2em] ${labelColors[variant]} mb-6`}
              style={{
                fontFamily: "var(--font-geom), Geneva, sans-serif",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: "0.1s",
              }}
            >
              {label}
            </p>

            {/* Title - Massive Typography */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight ${textColors[variant]} mb-8`}
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition:
                  "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "0.2s",
              }}
            >
              {title.split(" ").map((word, idx) => (
                <span key={idx} className="block">
                  {word.toUpperCase()}
                </span>
              ))}
            </h1>

            {/* Numbered Navigation */}
            {navItems && navItems.length > 0 && (
              <nav
                className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: "0.4s",
                }}
              >
                {navItems.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm ${textColors[variant]} hover:opacity-70 transition-opacity`}
                    style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                  >
                    {idx + 1}. {item.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Description */}
            <p
              className={`text-lg lg:text-xl leading-relaxed ${textColors[variant]} opacity-90 max-w-xl mb-8`}
              style={{
                fontFamily: "Georgia, serif",
                opacity: isLoaded ? 0.9 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: "0.5s",
              }}
            >
              {description}
            </p>

            {/* CTA Button */}
            {ctaText && ctaHref && (
              <Link
                href={ctaHref}
                className={`inline-block px-6 py-3 text-sm font-bold uppercase tracking-wider ${
                  variant === "ocean" ? "bg-white text-deep-ocean" : "bg-deep-ocean text-white"
                } hover:opacity-90 transition-opacity`}
                style={{
                  fontFamily: "var(--font-geom), Geneva, sans-serif",
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                  transitionDelay: "0.6s",
                }}
              >
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
