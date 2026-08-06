export function PinaultQuote() {
  return (
    <section className="bg-seafoam py-20 lg:py-28" aria-labelledby="pinault-quote">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
        <blockquote>
          <p id="pinault-quote" className="text-balance text-2xl leading-relaxed text-deep-ocean sm:text-3xl lg:text-4xl">
            “Sustainable development is a fundamental break that&apos;s going to reshuffle the entire deck. There are companies today that are going to dominate in the future simply because they understand that.”
          </p>
          <footer className="mt-8 text-sm font-medium tracking-wide text-deep-ocean/70">
            <cite className="not-italic">François-Henri Pinault, Chairman and CEO of Kering</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
