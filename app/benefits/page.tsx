import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BenefitsHero } from "@/components/benefits/benefits-hero"
import { BenefitCards } from "@/components/benefits/benefit-cards"
import { BenefitsCTA } from "@/components/benefits/benefits-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unlock Your Sustainability Advantage | Smoothsailing Sustainability",
  description:
    "Discover how sustainability drives lower costs, higher revenues, stronger talent retention, and greater brand loyalty for your organization.",
}

export default function BenefitsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <BenefitsHero />
        <BenefitCards />
        <BenefitsCTA />
      </main>
      <Footer />
    </div>
  )
}
