"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { AnimateOnScroll } from "./animate-on-scroll"

interface VideoSectionProps {
  videoSrc: string
  posterSrc?: string
  title?: string
  subtitle?: string
  children?: React.ReactNode
  overlayOpacity?: number
  className?: string
}

export function VideoSection({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  children,
  overlayOpacity = 0.5,
  className,
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play()
        } else if (videoRef.current) {
          videoRef.current.pause()
        }
      },
      { threshold: 0.25 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <video ref={videoRef} autoPlay muted loop playsInline poster={posterSrc} className="w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-deep-ocean" style={{ opacity: overlayOpacity }} />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {title && (
            <AnimateOnScroll>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h2>
            </AnimateOnScroll>
          )}
          {subtitle && (
            <AnimateOnScroll delay={100}>
              <p className="text-lg sm:text-xl text-cloud/90 max-w-2xl mb-8">{subtitle}</p>
            </AnimateOnScroll>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}
