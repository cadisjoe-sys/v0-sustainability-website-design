"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface ScrollContextType {
  scrollY: number
  scrollDirection: "up" | "down" | null
  isInView: (element: HTMLElement | null) => boolean
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  scrollDirection: null,
  isInView: () => false,
})

export function useScroll() {
  return useContext(ScrollContext)
}

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
      setScrollY(currentScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isInView = (element: HTMLElement | null) => {
    if (!element) return false
    const rect = element.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
  }

  return <ScrollContext.Provider value={{ scrollY, scrollDirection, isInView }}>{children}</ScrollContext.Provider>
}
