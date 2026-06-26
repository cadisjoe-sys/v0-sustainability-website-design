"use client"

import { cn } from "@/lib/utils"

interface WaveDividerProps {
  className?: string
  fillColor?: string
  position?: "top" | "bottom"
  variant?: "smooth" | "ripple" | "flowing" | "gentle" | "subtle"
  animated?: boolean
  height?: "sm" | "md" | "lg"
  glassmorphic?: boolean
}

export function WaveDivider({
  className,
  fillColor = "currentColor",
  position = "bottom",
  variant = "smooth",
  animated = true,
  height = "md",
  glassmorphic = false,
}: WaveDividerProps) {
  const paths = {
    smooth: "M0,0 C200,100 400,0 600,50 C800,100 1000,0 1200,50 C1400,100 1440,50 1440,50 L1440,100 L0,100 Z",
    ripple:
      "M0,50 Q60,0 120,50 T240,50 T360,50 T480,50 T600,50 T720,50 T840,50 T960,50 T1080,50 T1200,50 T1320,50 T1440,50 L1440,100 L0,100 Z",
    flowing:
      "M0,40 C120,80 240,20 360,50 C480,80 600,30 720,60 C840,90 960,40 1080,70 C1200,100 1320,50 1440,80 L1440,100 L0,100 Z",
    gentle: "M0,60 Q360,20 720,60 T1440,60 L1440,100 L0,100 Z",
    subtle: "M0,80 Q720,40 1440,80 L1440,100 L0,100 Z",
  }

  const heights = {
    sm: "h-8 sm:h-12",
    md: "h-16 sm:h-20 lg:h-24",
    lg: "h-24 sm:h-32 lg:h-40",
  }

  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden pointer-events-none",
        position === "top" ? "-top-1 rotate-180" : "-bottom-1",
        className,
      )}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={cn("w-full", heights[height])}>
        {glassmorphic && (
          <defs>
            <filter id="glass-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>
        )}
        <path
          d={paths[variant]}
          fill={fillColor}
          fillOpacity={glassmorphic ? 0.7 : 1}
          filter={glassmorphic ? "url(#glass-blur)" : undefined}
          className={cn(
            animated && variant === "flowing" && "animate-wave-flow",
            animated && variant === "ripple" && "animate-wave-ripple",
          )}
        />
      </svg>
    </div>
  )
}

interface WaveBorderProps {
  className?: string
  color?: string
  position?: "top" | "bottom" | "both"
  glassmorphic?: boolean
}

export function WaveBorder({
  className,
  color = "var(--seafoam)",
  position = "bottom",
  glassmorphic = false,
}: WaveBorderProps) {
  const WaveLine = () => (
    <svg className="w-full h-2" viewBox="0 0 1440 8" preserveAspectRatio="none">
      <path
        d="M0,4 Q90,0 180,4 T360,4 T540,4 T720,4 T900,4 T1080,4 T1260,4 T1440,4"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity={glassmorphic ? 0.15 : 0.25}
        className="animate-wave-inline"
      />
    </svg>
  )

  return (
    <div className={cn("absolute left-0 right-0 pointer-events-none", className)}>
      {(position === "top" || position === "both") && (
        <div className="absolute top-0 left-0 right-0">
          <WaveLine />
        </div>
      )}
      {(position === "bottom" || position === "both") && (
        <div className="absolute bottom-0 left-0 right-0">
          <WaveLine />
        </div>
      )}
    </div>
  )
}

interface GlassWaveProps {
  className?: string
  color?: string
}

export function GlassWave({ className, color = "var(--seafoam)" }: GlassWaveProps) {
  return (
    <svg className={cn("pointer-events-none", className)} viewBox="0 0 400 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="0.08" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,100 Q100,50 200,100 T400,100"
        fill="none"
        stroke="url(#glass-gradient)"
        strokeWidth="1"
        className="animate-wave-flow"
      />
    </svg>
  )
}
