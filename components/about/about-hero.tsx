"use client"

import { InnerPageHero } from "@/components/inner-page-hero"

export function AboutHero() {
  return (
    <InnerPageHero
      label="Who We Are"
      title="Guiding Organizations to Flourish"
      description="Planet-positive strategies that nourish people, nature, and business. We help organizations navigate their sustainability journey with expertise and partnership."
      navItems={[
        { label: "Our Founder", href: "#founder" },
        { label: "Our Network", href: "#network" },
        { label: "Our Mission", href: "#mission" },
      ]}
      variant="cloud"
    />
  )
}
