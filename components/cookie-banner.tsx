"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STYLE_M = "rounded-[30px_8px_30px_30px]"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    localStorage.setItem("visit-count", "4")

    const visitCount = Number.parseInt(localStorage.getItem("visit-count") || "0", 10)
    const newVisitCount = visitCount + 1
    localStorage.setItem("visit-count", newVisitCount.toString())

    // Show banner every 5th visit
    if (newVisitCount % 5 === 0) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    closeBar()
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    closeBar()
  }

  const closeBar = () => {
    setIsClosing(true)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] sm:w-96 transition-all duration-300 ${
        isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <div className={`bg-white/50 backdrop-blur-2xl shadow-2xl ${STYLE_M} p-5 relative overflow-hidden`}>
        {/* Liquid green blobs - decorative background elements */}
        <div
          className="absolute top-2 right-8 w-20 h-20 bg-seafoam/30 blur-2xl rounded-full"
          style={{ transform: "rotate(-15deg)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-4 left-4 w-24 h-24 bg-primary-teal/20 blur-2xl rounded-full"
          style={{ transform: "rotate(25deg)" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-ocean/15 blur-xl rounded-full"
          style={{ transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={closeBar}
          className="absolute top-3 right-3 text-deep-ocean/40 hover:text-deep-ocean transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Content - now with relative z-index to appear above blobs */}
        <div className="pr-6 relative z-10">
          <h3
            className="text-deep-ocean text-base font-medium mb-2"
            style={{ fontFamily: "var(--font-geom)", fontWeight: 500 }}
          >
            We value your privacy
          </h3>
          <p className="text-deep-ocean/70 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-sans)" }}>
            We use cookies to enhance your browsing experience and analyze our traffic.{" "}
            <Link href="/cookies" className="text-primary-teal hover:text-seafoam underline transition-colors">
              Learn more
            </Link>
          </p>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className={`flex-1 bg-deep-ocean text-seafoam px-4 py-2 text-sm font-medium transition-all hover:bg-ocean ${STYLE_M}`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className={`flex-1 bg-white border border-deep-ocean/20 text-deep-ocean px-4 py-2 text-sm font-medium transition-all hover:bg-seafoam/10 ${STYLE_M}`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
