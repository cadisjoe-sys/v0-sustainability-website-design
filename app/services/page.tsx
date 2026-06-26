import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCategories } from "@/components/services/service-categories"
import { ServicesCTA } from "@/components/services/services-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Smoothsailing Sustainability",
  description:
    "Custom sustainability solutions tailored to your organization's unique needs. From strategy to implementation, we guide your sustainability journey.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <ServiceCategories />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
