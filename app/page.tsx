import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { QuoteSection } from "@/components/home/quote-section"
import { PinaultQuote } from "@/components/home/pinault-quote"
import { ServicesPreview } from "@/components/home/services-preview"
import { FundamentalsSection } from "@/components/home/fundamentals-section"
import { ResourceHubPreview } from "@/components/home/resource-hub-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Hero with video and main CTA */}
        <HeroSection />
        {/* 2. About section with large headline */}
        <IntroSection />
        {/* 3. The Case for Sustainability */}
        <QuoteSection />
        {/* 4. Services preview */}
        <ServicesPreview />
        <PinaultQuote />
        {/* 5. How we work / Our Approach */}
        <FundamentalsSection />
        {/* 6. Resource Hub preview */}
        <ResourceHubPreview />
      </main>
      <Footer />
    </div>
  )
}
