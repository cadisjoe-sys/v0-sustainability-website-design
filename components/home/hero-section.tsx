"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { OrganicButton } from "@/components/ui/organic-button"
import { STYLE_M } from "@/lib/style-m"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5
  }, [])

  return (
    <section className="relative overflow-hidden bg-deep-ocean px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
      <div className="mx-auto max-w-[1500px]">
        <div className={`relative h-[38vh] min-h-64 max-h-[520px] w-full overflow-hidden sm:h-[44vh] ${STYLE_M}`}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kling_20260402_%E4%BD%9C%E5%93%81_shot_1_7s__2709_0-2%20%281%29-3XbuXPfyiFKWkLOuGSSskF7Y7SBrXY.mp4"
          />
          <div className="absolute inset-0 bg-deep-ocean/10" aria-hidden="true" />
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 px-2 pt-8 text-center sm:px-6 lg:pt-10">
          <h1 className="text-balance text-3xl font-normal leading-snug text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Let&apos;s chart your course to a resilient, profitable, and sustainable future.
          </h1>
          <Link href="/contact">
            <OrganicButton variant="secondary" size="lg">
              Let&apos;s talk
            </OrganicButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
