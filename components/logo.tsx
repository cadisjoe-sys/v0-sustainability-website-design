import Image from "next/image"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  size?: "compact" | "small" | "default" | "large"
  variant?: "teal" | "white"
  priority?: boolean
}

const sizeStyles = {
  compact: {
    image: "h-10 w-7",
    title: "text-base leading-4",
    subtitle: "text-[10px] leading-3",
    gap: "gap-2",
  },
  small: {
    image: "h-14 w-10",
    title: "text-lg leading-5",
    subtitle: "text-xs leading-4",
    gap: "gap-3",
  },
  default: {
    image: "h-24 w-16",
    title: "text-3xl leading-8",
    subtitle: "text-xl leading-6",
    gap: "gap-4",
  },
  large: {
    image: "h-48 w-32 lg:h-64 lg:w-44",
    title: "text-4xl leading-none lg:text-5xl xl:text-6xl",
    subtitle: "text-2xl leading-none lg:text-3xl xl:text-4xl",
    gap: "gap-6",
  },
}

export function Logo({ className, size = "default", variant = "teal", priority = false }: LogoProps) {
  const styles = sizeStyles[size]
  const isWhite = variant === "white"

  return (
    <span
      className={cn("inline-flex items-end", styles.gap, className)}
      aria-label="Smoothsailing Sustainability"
    >
      <Image
        src="/images/ss-logo-sailboat.png"
        alt=""
        width={200}
        height={300}
        priority={priority}
        className={cn("shrink-0 object-contain", styles.image, isWhite && "brightness-0 invert")}
        aria-hidden="true"
      />
      <span className="flex flex-col font-sans tracking-tight">
        <span className={cn(styles.title, isWhite ? "text-seafoam" : "text-deep-ocean")}>Smoothsailing</span>
        <span className={cn(styles.subtitle, isWhite ? "text-seafoam/70" : "text-deep-ocean/70")}>
          Sustainability
        </span>
      </span>
    </span>
  )
}

export function LogoIcon({
  className,
  size = 48,
  variant = "seafoam",
}: {
  className?: string
  size?: number
  variant?: "seafoam" | "white"
}) {
  return (
    <Image
      src="/images/ss-logo-sailboat.png"
      alt=""
      width={size}
      height={Math.round(size * 1.5)}
      className={cn("object-contain", variant === "white" && "brightness-0 invert", className)}
      aria-hidden="true"
    />
  )
}
