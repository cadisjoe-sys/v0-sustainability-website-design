import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResourceHero } from "@/components/resources/resource-hero"
import { ResourceTabs } from "@/components/resources/resource-tabs"
import { ResourcesCta } from "@/components/resources/resources-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resource Hub | Smoothsailing Sustainability",
  description:
    "A curated collection of case studies, best practices, research, and sustainability concepts to guide your sustainability journey.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ResourceHero />
        <ResourceTabs />
        <ResourcesCta />
      </main>
      <Footer />
    </div>
  )
}
