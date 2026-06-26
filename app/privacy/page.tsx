import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Smoothsailing Sustainability",
  description: "Learn how Smoothsailing Sustainability collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  )
}

function PrivacyHero() {
  return (
    <section className="bg-deep-ocean py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl text-white leading-tight text-balance"
            style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
          >
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl text-cloud leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="mt-4 text-sm text-cloud/60" style={{ fontFamily: "var(--font-sans)" }}>
            Last updated: December 12, 2025
          </p>
        </div>
      </div>
    </section>
  )
}

function PrivacyContent() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you contact us, subscribe to our newsletter, or use our services, we may collect personal information including your name, email address, phone number, company name, job title, and any other information you choose to provide.",
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.",
        },
        {
          subtitle: "Cookies and Similar Technologies",
          text: "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. See our Cookie Policy for more details.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our sustainability consulting services, respond to your inquiries, and communicate with you about our services.",
        },
        {
          subtitle: "Communications",
          text: "With your consent, we may send you newsletters, marketing materials, and updates about sustainability trends and our services. You can opt out at any time.",
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to improve our website, services, and user experience. This helps us understand what content is most valuable to our visitors.",
        },
      ],
    },
    {
      title: "3. Information Sharing",
      content: [
        {
          subtitle: "Third-Party Service Providers",
          text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep this information confidential.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information when required by law, to protect our rights, or to comply with a judicial proceeding, court order, or legal process.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of the transaction. We will notify you of any such change.",
        },
      ],
    },
    {
      title: "4. Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.",
        },
      ],
    },
    {
      title: "5. Your Rights",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access the personal information we hold about you and to request correction of any inaccurate information.",
        },
        {
          subtitle: "Deletion",
          text: "You may request deletion of your personal information, subject to certain legal exceptions. We will respond to your request within 30 days.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of receiving marketing communications from us at any time by clicking the unsubscribe link in our emails or contacting us directly.",
        },
      ],
    },
    {
      title: "6. Children's Privacy",
      content: [
        {
          subtitle: "",
          text: "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.",
        },
      ],
    },
    {
      title: "7. International Data Transfers",
      content: [
        {
          subtitle: "",
          text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.",
        },
      ],
    },
    {
      title: "8. Changes to This Policy",
      content: [
        {
          subtitle: "",
          text: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last updated' date. We encourage you to review this policy periodically.",
        },
      ],
    },
    {
      title: "9. Contact Us",
      content: [
        {
          subtitle: "",
          text: "If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@smoothsailingsustainability.com or through our contact form.",
        },
      ],
    },
  ]

  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {sections.map((section, index) => (
          <div key={index} className="mb-12 last:mb-0">
            <h2
              className="text-2xl lg:text-3xl text-deep-ocean mb-6"
              style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
            >
              {section.title}
            </h2>
            {section.content.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-6 last:mb-0">
                {item.subtitle && (
                  <h3 className="text-lg text-deep-ocean mb-2 font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                    {item.subtitle}
                  </h3>
                )}
                <p className="text-deep-ocean/70 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
