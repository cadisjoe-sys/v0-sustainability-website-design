import Link from "next/link"

export function ResourcesCta() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl lg:text-3xl text-deep-ocean mb-3" style={{ fontFamily: "var(--font-geom)" }}>
              Ready to put knowledge into action?
            </h2>
            <p className="text-deep-ocean/70" style={{ fontFamily: "var(--font-geom)" }}>
              Let's discuss how these insights can transform your sustainability strategy.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-deep-ocean text-seafoam text-sm hover:bg-deep-ocean/90 transition-colors self-start lg:self-center"
            style={{
              fontFamily: "var(--font-geom)",
              borderRadius: "50px 10px 50px 50px",
            }}
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Simple divider */}
        <div className="mt-16 h-px bg-deep-ocean/10" />
      </div>
    </section>
  )
}
