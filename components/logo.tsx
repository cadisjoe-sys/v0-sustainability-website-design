import Image from "next/image"

export function Logo({
  className = "",
  size = "default",
  variant = "teal",
}: { className?: string; size?: "small" | "default" | "large"; variant?: "teal" | "white" }) {
  const sizes = {
    small: { width: 150, height: 80 },
    default: { width: 200, height: 110 },
    large: { width: 280, height: 150 },
  }

  const { width, height } = sizes[size]
  const src = variant === "white" ? "/images/logo-white.png" : "/images/logo-stacked-teal.png"

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt="Smoothsailing Sustainability"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

export function LogoIcon({
  className = "",
  size = 48,
  variant = "seafoam",
}: { className?: string; size?: number; variant?: "seafoam" | "white" }) {
  const src = variant === "white" ? "/images/logo-white.png" : "/images/sailboat-seafoam.png"
  return (
    null
  )
}
