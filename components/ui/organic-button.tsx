"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BaseOrganicButtonProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "default" | "lg" | "xl"
  className?: string
  children: React.ReactNode
}

type OrganicButtonAsButton = BaseOrganicButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

type OrganicButtonAsLink = BaseOrganicButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type OrganicButtonProps = OrganicButtonAsButton | OrganicButtonAsLink

const OrganicButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, OrganicButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    const sizeStyles = {
      sm: "px-6 py-2 text-sm",
      default: "px-10 py-3 text-sm",
      lg: "px-14 py-4 text-base",
      xl: "px-16 py-5 text-lg",
    }

    const variantStyles = {
      primary: "bg-deep-ocean text-seafoam hover:bg-deep-ocean/90",
      secondary: "bg-seafoam text-deep-ocean hover:bg-seafoam/90",
      outline: "bg-transparent border-2 border-deep-ocean text-deep-ocean hover:bg-deep-ocean/10",
    }

    const baseClasses = cn(
      "inline-flex items-center justify-center font-semibold tracking-wide",
      "rounded-[50px_10px_50px_50px]",
      "transition-all duration-300 ease-out",
      "hover:scale-[1.02] active:scale-[0.98]",
      sizeStyles[size],
      variantStyles[variant],
      className,
    )

    if ("href" in props && props.href) {
      const { href, target, rel, ...linkProps } = props as OrganicButtonAsLink
      const isExternal = href.startsWith("http")

      return (
        null
      )
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={baseClasses} {...(props as any)}>
        {children}
      </button>
    )
  },
)
OrganicButton.displayName = "OrganicButton"

export { OrganicButton }
