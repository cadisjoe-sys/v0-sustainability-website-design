"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { STYLE_M } from "@/lib/style-m"

const dropdownData = {
  services: {
    title: "Services",
    description: "We help organizations navigate the full range of sustainability challenges.",
    seeAllLink: "/services",
    items: [
      { name: "Strategy & Planning", href: "/services#strategy" },
      { name: "Stakeholder Engagement & Compliance", href: "/services#compliance" },
      { name: "Competitive Edge", href: "/services#competitive" },
      { name: "Sustainable Operations", href: "/services#operations" },
    ],
  },
}

const navigationData = [
  { name: "Services", href: "/services", number: "01", hasDropdown: true, dropdownKey: "services" },
  { name: "Benefits", href: "/benefits", number: "02" },
  { name: "Resources", href: "/resources", number: "03" },
  { name: "Who We Are", href: "/about", number: "04" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null)
  const [menuAnimationComplete, setMenuAnimationComplete] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
      const timer = setTimeout(() => setMenuAnimationComplete(true), 300)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = ""
      setMenuAnimationComplete(false)
      setMobileExpandedSection(null)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
      setActiveDropdown(null)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(key)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <>
      <header
        className={cn(
          "fixed z-50 transition-all ease-[cubic-bezier(0.22,1,0.36,1)]",
          hasScrolled
            ? "top-2 left-2 right-2 sm:left-4 sm:right-4 lg:left-8 lg:right-8 w-auto duration-[900ms]"
            : "top-0 left-0 right-0 w-full duration-700",
        )}
      >
        <nav
          ref={navRef}
          className={cn(
            "flex items-center justify-between relative",
            hasScrolled
              ? `px-6 lg:px-8 py-2 ${STYLE_M} bg-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1),0_-2px_16px_rgba(255,255,255,0.1)_inset] transition-all duration-[1100ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]`
              : "px-6 lg:px-12 py-3 rounded-none bg-deep-ocean transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          )}
          style={
            hasScrolled
              ? {
                  backdropFilter: "blur(24px) saturate(180%) brightness(1.1) contrast(1.05)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%) brightness(1.1) contrast(1.05)",
                  transform: "scale(1)",
                  transition:
                    "all 1100ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 1200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                }
              : {
                  transform: "scale(1.02)",
                  transition:
                    "all 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                }
          }
        >
          {hasScrolled && (
            <>
              <div
                className={cn("absolute inset-0 pointer-events-none", STYLE_M)}
                style={{
                  backdropFilter: "blur(32px) saturate(200%) brightness(1.15)",
                  WebkitBackdropFilter: "blur(32px) saturate(200%) brightness(1.15)",
                  mixBlendMode: "overlay",
                  opacity: 0.25,
                }}
              />
              <div
                className={cn("absolute inset-0 pointer-events-none", STYLE_M)}
                style={{
                  backdropFilter: "blur(16px) saturate(150%)",
                  WebkitBackdropFilter: "blur(16px) saturate(150%)",
                  mixBlendMode: "soft-light",
                  opacity: 0.15,
                }}
              />
            </>
          )}

          <Link href="/" className="flex-shrink-0 relative z-10" aria-label="Smoothsailing Sustainability Home">
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "text-lg font-medium lg:text-xl leading-5",
                  hasScrolled
                    ? "text-deep-ocean transition-colors duration-500"
                    : "text-white transition-colors duration-700",
                )}
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                Smoothsailing
              </span>
              <span
                className={cn(
                  "leading-3 lg:text-sm font-normal",
                  hasScrolled
                    ? "text-deep-ocean/70 transition-colors duration-300 delay-100"
                    : "text-white/70 transition-colors duration-500",
                )}
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                Sustainability
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0 relative z-10">
            {navigationData.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && item.dropdownKey && handleDropdownEnter(item.dropdownKey)}
                onMouseLeave={handleDropdownLeave}
                style={{
                  opacity: hasScrolled ? 1 : 0.9,
                  transform: hasScrolled ? "translateY(0)" : "translateY(-2px)",
                  transition: `opacity ${600 + index * 50}ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 30}ms, transform ${700 + index * 50}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 30}ms`,
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-2 lg:px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors",
                    hasScrolled
                      ? "text-deep-ocean/70 hover:text-deep-ocean duration-400"
                      : "text-white/80 hover:text-white duration-500",
                  )}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className={cn(
                        "w-3 h-3 transition-transform duration-300",
                        activeDropdown === item.dropdownKey && "rotate-180",
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.hasDropdown && item.dropdownKey && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-2 w-[500px] bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300",
                      activeDropdown === item.dropdownKey
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2",
                    )}
                    onMouseEnter={() => handleDropdownEnter(item.dropdownKey!)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="flex">
                      <div className="w-2/5 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-deep-ocean/50 mb-2">
                            {dropdownData[item.dropdownKey as keyof typeof dropdownData].title}
                          </h3>
                          <p className="text-sm text-deep-ocean/70 leading-relaxed">
                            {dropdownData[item.dropdownKey as keyof typeof dropdownData].description}
                          </p>
                        </div>
                        <Link
                          href={dropdownData[item.dropdownKey as keyof typeof dropdownData].seeAllLink}
                          className="inline-flex items-center gap-1 text-sm font-medium text-deep-ocean hover:text-seafoam transition-colors mt-4"
                        >
                          See all
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      <div className="w-3/5 bg-mist/50 p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {dropdownData[item.dropdownKey as keyof typeof dropdownData].items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="text-sm text-deep-ocean/80 hover:text-deep-ocean transition-colors py-1"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className={cn("hidden sm:inline-flex relative px-5 py-2 overflow-hidden group", STYLE_M)}
              style={{
                transform: hasScrolled ? "scale(1)" : "scale(1.05)",
                opacity: hasScrolled ? 1 : 0.95,
                transition: "transform 1300ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms, opacity 900ms ease-out 150ms",
              }}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, transparent 30%, #7FBFB5 50%, transparent 70%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "liquidFlow 4s ease-in-out infinite",
                }}
              />

              <span
                className={cn(
                  "relative z-10 text-xs lg:text-sm font-medium transition-colors duration-500",
                  hasScrolled ? "text-deep-ocean" : "text-white",
                )}
              >
                Let&apos;s talk
              </span>

              <style jsx>{`
                @keyframes liquidFlow {
                  0% {
                    background-position: 200% 0;
                  }
                  100% {
                    background-position: -200% 0;
                  }
                }
              `}</style>
            </Link>

            <button
              className={cn(
                "relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 lg:hidden",
                hasScrolled ? "hover:bg-deep-ocean/10" : "hover:bg-white/10",
                menuOpen && "bg-white/10",
              )}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-5 flex flex-col justify-center items-center">
                <span
                  className={cn(
                    "absolute w-6 h-[2px] rounded-full transition-all",
                    hasScrolled ? "bg-deep-ocean" : "bg-white",
                  )}
                  style={{
                    transform: menuOpen ? "rotate(45deg)" : "translateY(-6px)",
                    transition: "transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                  }}
                />
                <span
                  className={cn(
                    "absolute w-6 h-[2px] rounded-full transition-all",
                    hasScrolled ? "bg-deep-ocean" : "bg-white",
                  )}
                  style={{
                    opacity: menuOpen ? 0 : 1,
                    transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
                    transition: "opacity 0.2s ease, transform 0.3s ease",
                  }}
                />
                <span
                  className={cn(
                    "absolute w-6 h-[2px] rounded-full transition-all",
                    hasScrolled ? "bg-deep-ocean" : "bg-white",
                  )}
                  style={{
                    transform: menuOpen ? "rotate(-45deg)" : "translateY(6px)",
                    transition: "transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6)",
                  }}
                />
              </div>
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "hidden md:block lg:hidden absolute top-full left-0 right-0 mt-2 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
          )}
          style={{
            maxHeight: menuOpen ? "calc(100vh - 100px)" : "0",
            transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
          }}
        >
          <div
            className={cn("bg-deep-ocean/95 backdrop-blur-xl overflow-y-auto", hasScrolled ? STYLE_M : "rounded-b-2xl")}
            style={{
              boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
              maxHeight: "calc(100vh - 100px)",
            }}
          >
            <div className="p-6">
              {/* Services Dropdown */}
              <div className="mb-4">
                <button
                  className="w-full flex items-center justify-between text-left text-white text-lg font-medium py-3 border-b border-white/10"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === "services" ? null : "services")}
                >
                  Services
                  <div
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10"
                    style={{
                      transform: mobileExpandedSection === "services" ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: mobileExpandedSection === "services" ? "300px" : "0",
                    opacity: mobileExpandedSection === "services" ? 1 : 0,
                    transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
                  }}
                >
                  <div className="pt-3 pb-2 grid grid-cols-2 gap-2">
                    {dropdownData.services.items.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="px-3 py-2 rounded-lg bg-white/5 text-white/90 text-sm hover:bg-white/10 transition-all"
                        style={{
                          opacity: mobileExpandedSection === "services" ? 1 : 0,
                          transform: mobileExpandedSection === "services" ? "translateY(0)" : "translateY(-8px)",
                          transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 40}ms`,
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {[
                  { name: "Benefits", href: "/benefits" },
                  { name: "Resources", href: "/resources" },
                  { name: "Who We Are", href: "/about" },
                ].map((item, idx) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-base font-medium py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-center transition-all"
                    style={{
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
                      transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${150 + idx * 50}ms`,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className="mt-6"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 350ms",
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-seafoam text-deep-ocean text-base font-medium rounded-[50px_10px_50px_50px] hover:bg-seafoam/90 active:scale-[0.98] transition-all duration-300"
                >
                  Let&apos;s talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={cn("fixed inset-0 z-40 md:hidden", menuOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className="absolute inset-0 bg-deep-ocean/95 backdrop-blur-md"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className="absolute top-0 right-0 bottom-0 w-full bg-deep-ocean overflow-y-auto"
          style={{
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            boxShadow: menuOpen ? "-10px 0 40px rgba(0,0,0,0.3)" : "none",
          }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-deep-ocean/95 backdrop-blur-sm">
            <div className="flex flex-col leading-none">
              <span
                className="text-lg font-medium text-white"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                Smoothsailing
              </span>
              <span
                className="text-[10px] font-medium text-white/70"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                Sustainability
              </span>
            </div>

            <button
              className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all duration-300 active:scale-95"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-8">
            <div
              className="mb-2"
              style={{
                opacity: menuAnimationComplete ? 1 : 0,
                transform: menuAnimationComplete ? "translateX(0)" : "translateX(20px)",
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0ms",
              }}
            >
              <button
                className="w-full flex items-center justify-between text-left text-white text-2xl font-medium py-4 border-b border-white/10 active:bg-white/5 transition-colors"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === "services" ? null : "services")}
              >
                Services
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
                  style={{
                    transform: mobileExpandedSection === "services" ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className="overflow-hidden"
                style={{
                  maxHeight: mobileExpandedSection === "services" ? "400px" : "0",
                  opacity: mobileExpandedSection === "services" ? 1 : 0,
                  transition: "max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
                }}
              >
                <div className="pt-4 pb-2">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-seafoam mb-3 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    View all services
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <p className="text-sm text-white/60 mb-4 leading-relaxed">{dropdownData.services.description}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {dropdownData.services.items.map((item, idx) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="px-4 py-3 rounded-xl bg-white/5 text-white text-sm hover:bg-white/10 active:bg-white/15 transition-all duration-200"
                        style={{
                          opacity: mobileExpandedSection === "services" ? 1 : 0,
                          transform: mobileExpandedSection === "services" ? "translateY(0)" : "translateY(-10px)",
                          transition: `all 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${idx * 50}ms`,
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {[
              { name: "Benefits", href: "/benefits", delay: 50 },
              { name: "Resources", href: "/resources", delay: 100 },
              { name: "Who We Are", href: "/about", delay: 150 },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white text-2xl font-medium py-4 border-b border-white/10 hover:text-seafoam active:bg-white/5 transition-colors"
                style={{
                  opacity: menuAnimationComplete ? 1 : 0,
                  transform: menuAnimationComplete ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${item.delay}ms`,
                }}
              >
                {item.name}
              </Link>
            ))}

            <div
              className="mt-8"
              style={{
                opacity: menuAnimationComplete ? 1 : 0,
                transform: menuAnimationComplete ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1) 200ms",
              }}
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-6 py-4 bg-seafoam text-deep-ocean text-base font-medium rounded-[50px_10px_50px_50px] hover:bg-seafoam/90 active:scale-[0.98] transition-all duration-300"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
