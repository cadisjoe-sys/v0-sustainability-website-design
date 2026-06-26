"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({ children, className, reverse = false, speed = "normal" }: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_60s_linear_infinite]",
    normal: "animate-[marquee_40s_linear_infinite]",
    fast: "animate-[marquee_20s_linear_infinite]",
  }

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className={cn("inline-flex", speedClass[speed], reverse && "[animation-direction:reverse]")}>
        <div className="flex items-center gap-8 px-4">{children}</div>
        <div className="flex items-center gap-8 px-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
