"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/magnetic-button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#books", label: "Books" },
  { href: "#recognition", label: "Awards" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          scrolled
            ? "bg-background/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            <MagneticButton as="a" href="/">
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-foreground hover:opacity-60 transition-opacity duration-500">
                DPT
              </span>
            </MagneticButton>

            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative text-[12px] xl:text-[13px] tracking-[0.08em] uppercase transition-all duration-500 underline-animation",
                      activeSection === item.href.substring(1)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground animate-draw-line" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-foreground z-50 relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-500 ease-out",
                    mobileMenuOpen ? "top-[11px] rotate-45" : "top-1"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[11px] w-6 h-0.5 bg-foreground transition-all duration-300",
                    mobileMenuOpen
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 w-6 h-0.5 bg-foreground transition-all duration-500 ease-out",
                    mobileMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                  )}
                />
              </div>
            </button>

            <MagneticButton
              as="a"
              href="#contact"
              className="hidden lg:inline-flex text-[13px] tracking-[0.08em] uppercase text-foreground hover:opacity-60 transition-opacity duration-500"
            >
              Get in Touch
            </MagneticButton>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-700 ease-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-background transition-all duration-700",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Content */}
        <nav className="relative flex flex-col items-center justify-center h-full gap-6 sm:gap-8 px-4">
          {navItems.map((item, index) => (
            <div key={item.href} className="overflow-hidden">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block font-serif text-3xl sm:text-4xl md:text-5xl text-foreground hover:opacity-60 transition-all duration-500",
                  mobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                )}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${150 + index * 75}ms`
                    : "0ms",
                }}
              >
                {item.label}
              </Link>
            </div>
          ))}

          <div className="overflow-hidden mt-8">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "block px-8 py-3 border border-foreground text-sm tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500",
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              )}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${150 + navItems.length * 75}ms`
                  : "0ms",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
