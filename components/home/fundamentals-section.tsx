"use client"

const approaches = [
  {
    number: "01",
    title: "Strategy or Tactics",
    description: "Whether you are defining your direction or ready to act, we meet you where you are.",
    details: "For organizations seeking a holistic sustainability strategy, we design strategic plans that align goals and operations and prioritize resources. For organizations with a strategy in place, we build tactical workplans with concrete actions, roles, and timelines so your team can execute with confidence.",
  },
  {
    number: "02",
    title: "Stakeholder Engagement",
    description: "Build trust through transparent, credible sustainability communication.",
    details: "We help you share your sustainability journey with investors, customers, employees, and regulators using reporting frameworks and channels that fit your organization. Together, we can also design two-way engagement that listens to stakeholder expectations and feeds their insights back into your strategy.",
  },
  {
    number: "03",
    title: "Competitive Advantage",
    description: "Turn sustainability into a strategic business advantage.",
    details: "We help you pinpoint opportunities where environmental responsibility fuels innovation, differentiation, cost savings, and long-term growth. We believe that environmental responsibility can also be a growth engine, sparking innovation, strengthening your brand, reducing risk, and opening new markets.",
  },
  {
    number: "04",
    title: "Powered by Expert Collaboration",
    description: "A flexible team model ensures you get the best value.",
    details: "Smoothsailing Sustainability draws on a broad network of experienced sustainability and business professionals, engaging them as needed to provide specialized expertise. This flexible team model ensures Smoothsailing Sustainability clients get the best value.",
  },
]

export function FundamentalsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-deep-ocean overflow-hidden">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 items-start">
          {/* Left side - Header content */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="mb-6">
              <div className="w-20 h-px bg-seafoam/40 mb-3" />
              <p className="text-sm text-seafoam/60 tracking-wide">Our Approach</p>
            </div>

            <h2
              className="text-4xl lg:text-5xl text-seafoam max-w-lg mb-6"
              style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
            >
              How We Work
            </h2>
            <p
              className="text-seafoam/70 text-lg lg:text-xl max-w-md leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
            >
              Matching the pace of sustainable innovation
            </p>
            
            <div className="w-full aspect-[4/3] overflow-hidden rounded-[50px_10px_50px_50px]">
              <img
                src="/images/growth-presentation.png"
                alt="Sustainability presentation with growth chart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Approach cards */}
          <div className="lg:col-span-3 space-y-6">
            {approaches.map((item, idx) => (
              <div
                key={idx}
                className="group bg-seafoam/5 border border-seafoam/10 p-6 lg:p-8 rounded-[30px_8px_30px_30px] hover:bg-seafoam/10 hover:border-seafoam/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-seafoam/40 text-sm font-medium">{item.number}</span>
                  <h3
                    className="text-xl lg:text-2xl text-seafoam"
                    style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="text-seafoam/80 text-base lg:text-lg mb-4 leading-relaxed"
                  style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                >
                  {item.description}
                </p>
                <p
                  className="text-seafoam/50 text-sm lg:text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
                >
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
