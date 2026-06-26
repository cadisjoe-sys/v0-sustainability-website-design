import Link from "next/link"
import { OrganicButton } from "@/components/ui/organic-button"

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <p className="text-xs text-deep-ocean/60 tracking-widest mb-3" style={{ fontFamily: "var(--font-geom)" }}>
              Get Started
            </p>
            <div className="w-16 h-px bg-deep-ocean/30 mb-6" />
            <h2
              className="text-2xl lg:text-3xl text-deep-ocean leading-snug mb-4"
              style={{ fontFamily: "var(--font-geom)" }}
            >
              Ready to chart your course?
            </h2>
            <p className="text-base text-deep-ocean/70 leading-relaxed" style={{ fontFamily: "var(--font-geom)" }}>
              Our team is ready to help you navigate your sustainability journey. Let's discuss how we can tailor our
              services to meet your organization's unique needs.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <OrganicButton variant="primary" size="lg">
                Let&apos;s talk
              </OrganicButton>
            </Link>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 flex justify-center">
          <div className="w-full h-px bg-deep-ocean/10" />
        </div>
      </div>
    </section>
  )
}
