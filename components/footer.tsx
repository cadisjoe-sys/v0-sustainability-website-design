"use client"

import type React from "react"


import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "Services", href: "/services" },
      { name: "Who We Are", href: "/about" },
      { name: "Sustainability Benefits", href: "/benefits" },
      { name: "Resource Hub", href: "/resources" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
}

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal links (not external social links)
    if (href.startsWith("/")) {
      // Let Next.js Link handle the navigation, then scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 0)
    }
  }

  return (
    <footer className="relative bg-deep-ocean text-seafoam overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="absolute top-0 left-0 right-0 h-40 bg-mist">
        <div
          className="absolute bottom-0 left-0 h-40 bg-deep-ocean"
          style={{
            width: "calc(100% + 100px)",
            borderRadius: "80px 0 0 0",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large angled triangle on left side */}
        <div
          className="absolute bottom-0 left-[15%] w-[600px] h-[600px] bg-deep-ocean/80"
          style={{
            clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)",
          }}
        />
        {/* Secondary angled shape */}
        <div
          className="absolute top-[20%] right-[30%] w-[400px] h-[400px] bg-deep-ocean/60"
          style={{
            clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-48 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-32">
          {/* Link columns - 3 columns taking up 6/12 on large screens */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="font-medium text-seafoam mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-base text-seafoam/80 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="flex items-end gap-6">
            <Image
              src="/images/ss-logo-sailboat.png"
              alt="Smoothsailing Sustainability Logo"
              width={200}
              height={300}
              className="h-48 lg:h-64 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span
                className="text-4xl lg:text-5xl xl:text-6xl text-seafoam tracking-tight transition-colors"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
              >
                Smoothsailing
              </span>
              <span
                className="text-2xl lg:text-3xl xl:text-4xl text-seafoam/70 tracking-tight mt-1 transition-colors"
                style={{ fontFamily: "var(--font-geom), Geneva, sans-serif", fontWeight: 400 }}
              >
                Sustainability
              </span>
            </div>
          </div>

          <div className="space-y-4 text-seafoam/50">
            <p className="text-sm">
              © {new Date().getFullYear()} Smoothsailing Sustainability LLC. All rights reserved.
            </p>
            <p className="text-xs">
              Questions or concerns may be directed to{" "}
              <a href="mailto:hello@smoothsailingsustainability.com" className="underline hover:text-white transition-colors">
                hello@smoothsailingsustainability.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
