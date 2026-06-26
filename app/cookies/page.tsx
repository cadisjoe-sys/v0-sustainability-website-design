import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Smoothsailing Sustainability",
  description: "Learn how Smoothsailing Sustainability uses cookies and similar technologies on our website.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CookiesHero />
        <CookiesContent />
      </main>
      <Footer />
    </div>
  )
}

function CookiesHero() {
  return (
    <section className="bg-deep-ocean py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1
            className="text-4xl sm:text-5xl text-white leading-tight text-balance"
            style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
          >
            Cookie Policy
          </h1>
          <p className="mt-6 text-xl text-cloud leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            Understanding how we use cookies to improve your experience.
          </p>
          <p className="mt-4 text-sm text-cloud/60" style={{ fontFamily: "var(--font-sans)" }}>
            Last updated: December 12, 2025
          </p>
        </div>
      </div>
    </section>
  )
}

function CookiesContent() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Required for the website to function properly. Cannot be disabled.",
      examples: ["Session management", "Security tokens", "Load balancing"],
      duration: "Session to 1 year",
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Page views tracking", "User journey analysis", "Performance monitoring"],
      duration: "Up to 2 years",
    },
    {
      name: "Functional Cookies",
      description: "Remember your preferences and personalization choices.",
      examples: ["Language preferences", "Region settings", "Accessibility options"],
      duration: "Up to 1 year",
    },
    {
      name: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaign effectiveness.",
      examples: ["Ad targeting", "Campaign analytics", "Social media integration"],
      duration: "Up to 2 years",
    },
  ]

  const sections = [
    {
      title: "1. What Are Cookies?",
      content: [
        {
          subtitle: "",
          text: "Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and provide a more personalized experience. Cookies can be 'session' cookies (deleted when you close your browser) or 'persistent' cookies (remain on your device for a set period).",
        },
      ],
    },
    {
      title: "2. How We Use Cookies",
      content: [
        {
          subtitle: "Website Functionality",
          text: "We use cookies to ensure our website functions properly, maintain your session while you browse, and remember your preferences such as language settings.",
        },
        {
          subtitle: "Analytics and Performance",
          text: "We use analytics cookies to understand how visitors interact with our website, which pages are most popular, and how we can improve the user experience.",
        },
        {
          subtitle: "Marketing and Advertising",
          text: "With your consent, we may use marketing cookies to deliver relevant content and measure the effectiveness of our marketing campaigns.",
        },
      ],
    },
    {
      title: "3. Third-Party Cookies",
      content: [
        {
          subtitle: "Analytics Providers",
          text: "We use Google Analytics to analyze website traffic. Google may use cookies to collect information about your use of our website. You can learn more about Google's practices at google.com/policies/privacy/partners.",
        },
        {
          subtitle: "Social Media",
          text: "If you use social sharing features on our website, those platforms may set their own cookies. We do not control these cookies; please refer to the respective platforms' privacy policies.",
        },
        {
          subtitle: "Embedded Content",
          text: "Some pages may include embedded content (such as videos) from third-party platforms, which may set their own cookies when you interact with that content.",
        },
      ],
    },
    {
      title: "4. Managing Cookies",
      content: [
        {
          subtitle: "Browser Settings",
          text: "Most web browsers allow you to control cookies through their settings. You can typically find these options in your browser's 'Settings,' 'Preferences,' or 'Privacy' menu. You can delete existing cookies, allow or block all cookies, or set preferences for certain websites.",
        },
        {
          subtitle: "Cookie Consent",
          text: "When you first visit our website, you will be presented with a cookie banner that allows you to accept or customize your cookie preferences. You can change these preferences at any time through the cookie settings link in our footer.",
        },
        {
          subtitle: "Impact of Disabling Cookies",
          text: "Please note that disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for the website to function properly.",
        },
      ],
    },
    {
      title: "5. Do Not Track",
      content: [
        {
          subtitle: "",
          text: "Some browsers offer a 'Do Not Track' (DNT) feature. Our website currently does not respond to DNT signals. However, you can control cookies through the methods described above and through our cookie consent tool.",
        },
      ],
    },
    {
      title: "6. Updates to This Policy",
      content: [
        {
          subtitle: "",
          text: "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically. The 'Last updated' date at the top indicates when this policy was last revised.",
        },
      ],
    },
    {
      title: "7. Contact Us",
      content: [
        {
          subtitle: "",
          text: "If you have questions about our use of cookies or this Cookie Policy, please contact us at privacy@smoothsailingsustainability.com or through our contact form.",
        },
      ],
    },
  ]

  return (
    <section className="bg-mist py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Cookie Types Table */}
        <div className="mb-16">
          <h2
            className="text-2xl lg:text-3xl text-deep-ocean mb-8"
            style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
          >
            Types of Cookies We Use
          </h2>
          <div className="grid gap-4">
            {cookieTypes.map((cookie, index) => (
              <div
                key={index}
                className="bg-white border border-deep-ocean/10 p-6"
                style={{ borderRadius: "20px 5px 20px 20px" }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="text-lg text-deep-ocean mb-2"
                      style={{ fontFamily: "var(--font-geom)", fontWeight: 400 }}
                    >
                      {cookie.name}
                    </h3>
                    <p className="text-deep-ocean/70 text-sm mb-3" style={{ fontFamily: "var(--font-sans)" }}>
                      {cookie.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cookie.examples.map((example, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-seafoam/30 text-deep-ocean"
                          style={{ borderRadius: "10px 3px 10px 10px" }}
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <span className="text-xs text-deep-ocean/50" style={{ fontFamily: "var(--font-sans)" }}>
                      Duration
                    </span>
                    <p className="text-sm text-deep-ocean" style={{ fontFamily: "var(--font-sans)" }}>
                      {cookie.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
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
