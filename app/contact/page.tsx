import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Smoothsailing Sustainability",
  description:
    "Have a question or idea? Send us a message. We're here to help you navigate your sustainability journey.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
