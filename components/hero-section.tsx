"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const expertise = [
  "Quality Assurance",
  "Academic Leadership",
  "Research & Publications",
  "Strategic Planning",
  "Curriculum Development",
  "Higher Education",
  "Team Management",
  "Policy Development",
  "Accreditation",
  "Faculty Training",
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll("[data-animate]");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4");
        el.classList.remove("opacity-0", "translate-y-6");
      }, i * 200);
    });
  }, []);

  return (
    <section ref={containerRef} className="h-svh flex flex-col overflow-hidden">
      {/* Main content area */}
      <div className="flex-1 flex items-center px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-[1800px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-16 items-end w-full">
            {/* Text Content */}
            <div className="order-2 lg:order-1 pb-4 lg:pb-8">
              <div className="order-2 lg:order-1 pb-4 lg:pb-8">
                <div
                  data-animate
                  className="opacity-0 translate-y-6 transition-all duration-1000 ease-out"
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4 lg:mb-6">
                    Academic Leader & Researcher
                  </p>
                </div>

                <h1
                  data-animate
                  className="opacity-0 translate-y-6 transition-all duration-1000 ease-out font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.02em] text-foreground"
                >
                  Dhurba
                  <br />
                  Prasad
                  <br />
                  <span className="text-muted-foreground/70">Timalsina</span>
                </h1>

                <div
                  data-animate
                  className="opacity-0 translate-y-6 transition-all duration-1000 ease-out mt-6 lg:mt-8"
                >
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md">
                    Head of IQAC at Kathmandu Model College.
                    <br className="hidden sm:block" />
                    Professor at International American University.
                  </p>
                </div>

                <div
                  data-animate
                  className="opacity-0 translate-y-6 transition-all duration-1000 ease-out mt-8 lg:mt-10"
                >
                  <a
                    href="#about"
                    className="inline-flex items-center gap-4 group"
                  >
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      Scroll to explore
                    </span>
                    <span className="w-8 sm:w-12 h-px bg-border group-hover:w-16 sm:group-hover:w-20 group-hover:bg-foreground/40 transition-all duration-700" />
                  </a>
                </div>
              </div>
            </div>

            <div
              data-animate
              className="order-1 lg:order-2 opacity-0 translate-y-6 transition-all duration-1000 ease-out flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative corner accents */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-l-2 border-t-2 border-foreground/20" />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-r-2 border-b-2 border-foreground/20" />

                {/* Background accent shape */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-full h-full bg-foreground/5 -z-10" />

                {/* Vertical text accent */}
                <div className="absolute -left-6 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 hidden sm:block">
                  <span
                    className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-muted-foreground/40 writing-mode-vertical rotate-180"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    Professor & Researcher
                  </span>
                </div>

                {/* Main image container */}
                <div className="relative h-[45vh] sm:h-[50vh] lg:h-[60vh] xl:h-[65vh] aspect-[3/4] overflow-hidden">
                  <div className="absolute inset-0 animate-subtle-float">
                    <Image
                      src="/images/profile.png"
                      alt="Dhurba Prasad Timalsina"
                      fill
                      className="object-cover object-top grayscale contrast-[1.1] brightness-[1.02]"
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
                    />
                  </div>
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-background border border-border px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 shadow-sm">
                  <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    IQAC
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base font-serif text-foreground">
                    Head of Department
                  </p>
                </div>

                {/* Decorative dots pattern */}
                <div className="absolute -right-4 sm:-right-6 lg:-right-8 top-1/4 hidden md:grid grid-cols-3 gap-1.5 lg:gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-foreground/15"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-animate
        className="opacity-0 translate-y-6 transition-all duration-1000 ease-out shrink-0 pb-6 lg:pb-8"
      >
        {" "}
        <div className="max-w-[1800px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <div className="border-t border-border/40 pt-4 lg:pt-5">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
              Areas of Expertise
            </p>
          </div>
        </div>
        {/* Full-width carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-carousel">
            {[...expertise, ...expertise, ...expertise].map((item, index) => (
              <div key={index} className="flex-shrink-0 px-3 sm:px-5 lg:px-6">
                <span className="text-sm lg:text-base font-serif text-muted-foreground/80 whitespace-nowrap hover:text-foreground transition-colors duration-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
