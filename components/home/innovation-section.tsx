"use client"

import { AnimateOnScroll } from "@/components/animate-on-scroll"
import Image from "next/image"

export function InnovationSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-mist overflow-hidden">
      <div className="absolute top-20 -left-20 w-64 h-64 bg-seafoam/20 rounded-[50px_10px_50px_50px] blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-48 h-48 bg-primary-teal/15 rounded-[50px_10px_50px_50px] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12">
            <div className="w-32 h-px bg-deep-ocean/30 mb-4" />
            <p className="text-sm text-deep-ocean/60 tracking-wide">Our Approach</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-deep-ocean leading-relaxed max-w-4xl mb-12"
            style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
          >
            Matching the pace of sustainable innovation
          </h2>
        </AnimateOnScroll>

        {/* Two column: Body text and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimateOnScroll delay={200}>
            <div className="space-y-6">
              <p
                className="text-base lg:text-lg text-stone leading-relaxed"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                At Smoothsailing, we understand that sustainability isn't a destination—it's an evolving journey that
                requires constant adaptation and forward-thinking strategies.
              </p>
              <p
                className="text-base lg:text-lg text-stone leading-relaxed"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif" }}
              >
                Our consultancy is built to move at the speed of innovation, providing agile solutions that keep your
                business ahead of regulatory changes, market shifts, and emerging best practices.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <div className="overflow-hidden h-64 lg:h-80 relative rounded-[50px_10px_50px_50px]">
              <Image
                src="/images/meeting-room-harbor.jpeg"
                alt="Sustainability consultants meeting with harbor sailboat view"
                fill
                className="object-cover rounded-[50px_10px_50px_50px]"
              />
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center"></div>
      </div>
    </section>
  )
}
