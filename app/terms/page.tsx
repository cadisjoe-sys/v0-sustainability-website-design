import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Smoothsailing Sustainability",
  description: "Read the terms and conditions governing the use of Smoothsailing Sustainability services and website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TermsHero />
        <TermsContent />
      </main>
      <Footer />
    </div>
  )
}

function TermsHero() {
  return (
    <section className="bg-deep-ocean py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl text-white leading-tight text-balance"
            style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
          >
            Terms & Conditions
          </h1>
          <p className="mt-6 text-xl text-cloud leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            Please read these terms carefully before using our services.
          </p>
          <p className="mt-4 text-sm text-cloud/60" style={{ fontFamily: "var(--font-sans)" }}>
            Last updated: December 12, 2025
          </p>
        </div>
      </div>
    </section>
  )
}

function TermsContent() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        {
          subtitle: "",
          text: "By accessing or using the Smoothsailing Sustainability website and services, you agree to be bound by these Terms & Conditions. If you do not agree to all terms, please do not use our services. These terms constitute a legally binding agreement between you and Smoothsailing Sustainability.",
        },
      ],
    },
    {
      title: "2. Description of Services",
      content: [
        {
          subtitle: "Consulting Services",
          text: "Smoothsailing Sustainability provides sustainability consulting services including but not limited to strategy development, environmental assessments, compliance guidance, and training programs. The specific scope of services will be defined in individual service agreements.",
        },
        {
          subtitle: "Website and Resources",
          text: "Our website provides informational content, resources, and tools related to sustainability practices. This content is provided for general informational purposes and should not be considered professional advice specific to your situation.",
        },
      ],
    },
    {
      title: "3. User Responsibilities",
      content: [
        {
          subtitle: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information when using our services or submitting inquiries. You are responsible for maintaining the confidentiality of any account credentials.",
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree not to use our website or services for any unlawful purpose, to violate any applicable laws or regulations, to infringe on the rights of others, or to interfere with the proper functioning of our services.",
        },
        {
          subtitle: "Compliance",
          text: "You are responsible for ensuring that your use of our services complies with all applicable laws, regulations, and industry standards in your jurisdiction.",
        },
      ],
    },
    {
      title: "4. Intellectual Property",
      content: [
        {
          subtitle: "Our Content",
          text: "All content on our website, including text, graphics, logos, images, and software, is the property of Smoothsailing Sustainability or our licensors and is protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          subtitle: "Limited License",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.",
        },
        {
          subtitle: "Your Content",
          text: "By submitting content to us, you grant Smoothsailing Sustainability a non-exclusive, royalty-free license to use, reproduce, and display such content in connection with providing our services.",
        },
      ],
    },
    {
      title: "5. Confidentiality",
      content: [
        {
          subtitle: "Client Information",
          text: "We treat all client information as confidential and will not disclose it to third parties except as necessary to provide our services or as required by law. Specific confidentiality obligations will be outlined in individual service agreements.",
        },
        {
          subtitle: "Proprietary Methods",
          text: "Our consulting methodologies, frameworks, and tools are proprietary. Clients may use deliverables for their internal purposes but may not share our proprietary methods with third parties without permission.",
        },
      ],
    },
    {
      title: "6. Payment Terms",
      content: [
        {
          subtitle: "Fees",
          text: "Fees for our consulting services will be specified in individual service agreements. All fees are in US dollars unless otherwise stated. Applicable taxes will be added where required.",
        },
        {
          subtitle: "Payment Schedule",
          text: "Payment terms, including deposits, milestone payments, and final payments, will be outlined in your service agreement. Late payments may incur interest charges as specified in the agreement.",
        },
        {
          subtitle: "Refunds",
          text: "Our refund policy varies by service type and will be specified in your service agreement. Generally, deposits are non-refundable once work has commenced.",
        },
      ],
    },
    {
      title: "7. Limitation of Liability",
      content: [
        {
          subtitle: "Disclaimer",
          text: "Our services are provided 'as is' without warranties of any kind, either express or implied. We do not guarantee specific results from our consulting services.",
        },
        {
          subtitle: "Limitation",
          text: "To the maximum extent permitted by law, Smoothsailing Sustainability shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.",
        },
        {
          subtitle: "Indemnification",
          text: "You agree to indemnify and hold harmless Smoothsailing Sustainability from any claims, losses, or damages arising from your violation of these terms or misuse of our services.",
        },
      ],
    },
    {
      title: "8. Service Agreements",
      content: [
        {
          subtitle: "",
          text: "Specific consulting engagements will be governed by individual service agreements that may contain additional terms. In the event of a conflict between these Terms & Conditions and a service agreement, the service agreement shall prevail for that engagement.",
        },
      ],
    },
    {
      title: "9. Termination",
      content: [
        {
          subtitle: "By You",
          text: "You may stop using our website at any time. Termination of consulting services is governed by your specific service agreement.",
        },
        {
          subtitle: "By Us",
          text: "We reserve the right to suspend or terminate your access to our services for violation of these terms, non-payment, or for any other reason at our discretion.",
        },
      ],
    },
    {
      title: "10. Governing Law",
      content: [
        {
          subtitle: "",
          text: "These Terms & Conditions are governed by the laws of the State of California, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.",
        },
      ],
    },
    {
      title: "11. Changes to Terms",
      content: [
        {
          subtitle: "",
          text: "We reserve the right to modify these Terms & Conditions at any time. Material changes will be posted on this page with an updated effective date. Your continued use of our services after changes constitutes acceptance of the modified terms.",
        },
      ],
    },
    {
      title: "12. Contact Information",
      content: [
        {
          subtitle: "",
          text: "For questions about these Terms & Conditions, please contact us at legal@smoothsailingsustainability.com or through our contact form.",
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
