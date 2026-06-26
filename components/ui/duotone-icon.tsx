"use client"

import type React from "react"

import {
  Leaf,
  Waves,
  Compass,
  Anchor,
  Sailboat,
  Globe,
  Lightbulb,
  ChartLineUp,
  Recycle,
  TreeEvergreen,
  Sun,
  Wind,
  Drop,
  Lightning,
  Factory,
  Buildings,
  Handshake,
  Certificate,
  ShieldCheck,
  Target,
  type IconProps,
} from "@phosphor-icons/react"

// Site color palette for duotone icons
export const iconColors = {
  // Primary combinations
  seafoamTeal: {
    primary: "#7FBFB5", // seafoam
    secondary: "#2A7D6E", // primary-teal
  },
  tealOcean: {
    primary: "#2A7D6E", // primary-teal
    secondary: "#1B4D5A", // ocean
  },
  deepOceanSeafoam: {
    primary: "#0F2C35", // deep-ocean
    secondary: "#7FBFB5", // seafoam
  },
  oceanSeafoam: {
    primary: "#1B4D5A", // ocean
    secondary: "#7FBFB5", // seafoam
  },
}

interface DuotoneIconProps extends IconProps {
  icon:
    | "leaf"
    | "waves"
    | "compass"
    | "anchor"
    | "sailboat"
    | "globe"
    | "lightbulb"
    | "chart"
    | "recycle"
    | "tree"
    | "sun"
    | "wind"
    | "drop"
    | "lightning"
    | "factory"
    | "buildings"
    | "handshake"
    | "certificate"
    | "shield"
    | "target"
  colorScheme?: keyof typeof iconColors
}

const iconMap = {
  leaf: Leaf,
  waves: Waves,
  compass: Compass,
  anchor: Anchor,
  sailboat: Sailboat,
  globe: Globe,
  lightbulb: Lightbulb,
  chart: ChartLineUp,
  recycle: Recycle,
  tree: TreeEvergreen,
  sun: Sun,
  wind: Wind,
  drop: Drop,
  lightning: Lightning,
  factory: Factory,
  buildings: Buildings,
  handshake: Handshake,
  certificate: Certificate,
  shield: ShieldCheck,
  target: Target,
}

export function DuotoneIcon({ icon, colorScheme = "seafoamTeal", size = 32, ...props }: DuotoneIconProps) {
  const IconComponent = iconMap[icon]
  const colors = iconColors[colorScheme]

  return (
    <IconComponent
      weight="duotone"
      size={size}
      color={colors.primary}
      style={
        {
          "--ph-duotone-primary": colors.primary,
          "--ph-duotone-secondary": colors.secondary,
        } as React.CSSProperties
      }
      {...props}
    >
      <style>{`
        .ph-duotone > *[fill="none"][stroke] { stroke: ${colors.primary}; }
        .ph-duotone > *[opacity] { fill: ${colors.secondary}; opacity: 0.4; }
      `}</style>
    </IconComponent>
  )
}

// Export individual icons for direct use
export {
  Leaf,
  Waves,
  Compass,
  Anchor,
  Sailboat,
  Globe,
  Lightbulb,
  ChartLineUp,
  Recycle,
  TreeEvergreen,
  Sun,
  Wind,
  Drop,
  Lightning,
  Factory,
  Buildings,
  Handshake,
  Certificate,
  ShieldCheck,
  Target,
}
