/**
 * Style-M Design System
 *
 * Two shape variants for consistent visual identity:
 * - STYLE_M: Primary organic shape (50px_10px_50px_50px) - for buttons, images, hero elements
 * - STYLE_M_CARD: Secondary geometric shape (20px_10px_20px_20px) - for cards, data blocks
 */

// Primary organic shape - flowing, asymmetric corners
export const STYLE_M = "rounded-[50px_10px_50px_50px]"

// Secondary card shape - geometric, structured
export const STYLE_M_CARD = "rounded-[20px_10px_20px_20px]"

// Size variants for primary shape
export const STYLE_M_VARIANTS = {
  sm: "rounded-[30px_6px_30px_30px]",
  md: "rounded-[50px_10px_50px_50px]",
  lg: "rounded-[70px_14px_70px_70px]",
} as const

// Size variants for card shape
export const STYLE_M_CARD_VARIANTS = {
  sm: "rounded-[12px_6px_12px_12px]",
  md: "rounded-[20px_10px_20px_20px]",
  lg: "rounded-[28px_14px_28px_28px]",
} as const

// Border styles
export const STYLE_M_BORDERS = {
  subtle: "border border-white/10",
  medium: "border border-white/20",
  strong: "border-2 border-white/30",
  accent: "border-2 border-seafoam/50",
} as const

// Shadow styles
export const STYLE_M_SHADOWS = {
  subtle: "shadow-sm",
  medium: "shadow-md",
  strong: "shadow-lg shadow-black/20",
  glow: "shadow-lg shadow-seafoam/20",
} as const

// Section presets
export const STYLE_M_SECTIONS = {
  card: `${STYLE_M_CARD} bg-white/5 backdrop-blur-sm border border-white/10`,
  panel: `${STYLE_M_CARD} bg-mist/50 backdrop-blur-md border border-white/20`,
  feature: `${STYLE_M} bg-gradient-to-br from-seafoam/10 to-primary-teal/10 backdrop-blur-sm`,
  hero: `${STYLE_M} overflow-hidden`,
} as const

// Grid layouts
export const STYLE_M_GRIDS = {
  twoColumn: "grid grid-cols-1 md:grid-cols-2 gap-4",
  threeColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
  fourColumn: "grid grid-cols-2 lg:grid-cols-4 gap-4",
} as const

// Utility function to combine styles
export function combineStyleM(
  variant: keyof typeof STYLE_M_CARD_VARIANTS = "md",
  border: keyof typeof STYLE_M_BORDERS = "subtle",
  shadow: keyof typeof STYLE_M_SHADOWS = "subtle",
): string {
  return `${STYLE_M_CARD_VARIANTS[variant]} ${STYLE_M_BORDERS[border]} ${STYLE_M_SHADOWS[shadow]}`
}

// Legacy aliases for backwards compatibility
export const ORHAN_SHAPE = STYLE_M
export const ORGANIC_MOTIF = STYLE_M
export const SQUAL_SHAPE = STYLE_M_CARD
export const SQUAL_CARD = STYLE_M_CARD
