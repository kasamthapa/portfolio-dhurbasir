"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          scrolled ? "bg-background/95 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <nav className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            <Link
              href="/"
              className="font-serif text-xl md:text-2xl tracking-tight text-foreground hover:opacity-60 transition-opacity duration-500"
            >
              DPT
            </Link>

            <ul className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link
              href="#contact"
              className="hidden md:inline-flex text-[13px] tracking-[0.05em] text-foreground hover:opacity-60 transition-opacity duration-500"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-serif text-3xl sm:text-4xl text-foreground hover:opacity-60 transition-all duration-500",
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 75}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "mt-8 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-all duration-500",
              mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: mobileMenuOpen ? `${navItems.length * 75}ms` : "0ms" }}
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </>
  )
}
