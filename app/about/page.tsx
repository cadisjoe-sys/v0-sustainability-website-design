import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTemplate } from "@/components/page-template"
import { FounderSection } from "@/components/about/founder-section"
import { NetworkSection } from "@/components/about/network-section"
import { QuoteSection } from "@/components/about/quote-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Who We Are | Smoothsailing Sustainability",
  description:
    "Meet the team behind Smoothsailing Sustainability. Guiding organizations to flourish with planet-positive strategies.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageTemplate
          headerLabel="Who We Are"
          headerTitle="Guiding Organizations to Flourish"
          headerSubtitle="Planet-positive strategies that nourish people, nature, and business. We help organizations navigate their sustainability journey with expertise and partnership."
          variant="seafoam"
          footerTitle="Let's Navigate Your Sustainability Journey"
          footerDescription="Partner with us to create lasting impact for your organization and the planet."
          footerCtaText="Start the Conversation"
          footerCtaHref="/contact"
        >
          <FounderSection />
          <NetworkSection />
          <QuoteSection />
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}
