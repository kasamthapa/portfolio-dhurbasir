"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./magnetic-button";
import { useTypewriter } from "../hooks/use-typewriter";

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

const typewriterWords = [
  "Academic Leader",
  "Researcher",
  "Author",
  "Professor",
  "Quality Assurance Expert",
  "Educational Consultant",
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { currentText } = useTypewriter({
    words: typewriterWords,
    typingSpeed: 80,
    deletingSpeed: 40,
    delayBetweenWords: 2500,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-svh flex flex-col overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content area */}
      <div className="flex-1 flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-20 sm:pt-24 lg:pt-28">
        <div className="max-w-[1800px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center w-full">
            {/* Text Content */}
            <div className="order-2 lg:order-1 pb-4 lg:pb-0">
              <div className="overflow-hidden mb-4 lg:mb-6">
                <div
                  className={cn(
                    "flex items-center gap-2 transition-all duration-1000 ease-out",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  )}
                  style={{ transitionDelay: "200ms" }}
                >
                  <span className="w-8 h-px bg-foreground/40" />
                  <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">
                    <span>{currentText}</span>
                    <span className="inline-block w-[2px] h-4 bg-foreground/60 ml-1 animate-blink align-middle" />
                  </p>
                </div>
              </div>

              <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.02em] text-foreground">
                {["Dhurba", "Prasad", "Timalsina"].map((word, index) => (
                  <div key={word} className="overflow-hidden">
                    <span
                      className={cn(
                        "block transition-all duration-1000 ease-out",
                        index === 2 ? "text-muted-foreground/60" : "",
                        isLoaded
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      )}
                      style={{ transitionDelay: `${300 + index * 150}ms` }}
                    >
                      {word}
                    </span>
                  </div>
                ))}
              </h1>

              <div className="overflow-hidden mt-6 lg:mt-8">
                <p
                  className={cn(
                    "text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md transition-all duration-1000 ease-out",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  )}
                  style={{ transitionDelay: "750ms" }}
                >
                  Head of IQAC at Kathmandu Model College.
                  <br className="hidden sm:block" />
                  Professor at International American University.
                </p>
              </div>

              <div
                className={cn(
                  "mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 transition-all duration-1000 ease-out",
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: "900ms" }}
              >
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-all duration-500 group"
                >
                  <span>Get in Touch</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </MagneticButton>

                <MagneticButton
                  as="a"
                  href="#about"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    Explore Work
                  </span>
                  <span className="w-8 sm:w-12 h-px bg-border group-hover:w-16 sm:group-hover:w-20 group-hover:bg-foreground/40 transition-all duration-700" />
                </MagneticButton>
              </div>
            </div>

            <div
              className={cn(
                "order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1200 ease-out",
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              )}
              style={{
                transitionDelay: "400ms",
                transform: isLoaded
                  ? `translate(${mousePosition.x * 0.3}px, ${
                      mousePosition.y * 0.3
                    }px)`
                  : undefined,
              }}
            >
              <div className="relative">
                <div
                  className={cn(
                    "absolute -top-3 -left-3 sm:-top-4 sm:-left-4 lg:-top-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-l-2 border-t-2 border-foreground/20 transition-all duration-1000 ease-out",
                    isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                  style={{ transitionDelay: "800ms" }}
                />
                <div
                  className={cn(
                    "absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-r-2 border-b-2 border-foreground/20 transition-all duration-1000 ease-out",
                    isLoaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  )}
                  style={{ transitionDelay: "900ms" }}
                />

                {/* Background accent shape */}
                <div
                  className={cn(
                    "absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-full h-full bg-foreground/5 -z-10 transition-all duration-1000 ease-out",
                    isLoaded
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : "translate-x-4 translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: "600ms" }}
                />

                {/* Vertical text accent */}
                <div
                  className={cn(
                    "absolute -left-6 sm:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 hidden sm:block transition-all duration-1000 ease-out",
                    isLoaded
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: "1000ms" }}
                >
                  <span
                    className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-muted-foreground/40"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    Professor & Researcher
                  </span>
                </div>

                {/* Main image container */}
                <div
                  className={cn(
                    "relative h-[40vh] sm:h-[45vh] lg:h-[55vh] xl:h-[60vh] aspect-[3/4] overflow-hidden transition-all duration-1200 ease-out image-zoom",
                    isLoaded
                      ? "clip-path-[inset(0)]"
                      : "clip-path-[inset(0_100%_0_0)]"
                  )}
                  style={{
                    clipPath: isLoaded ? "inset(0)" : "inset(0 100% 0 0)",
                    transitionDelay: "500ms",
                  }}
                >
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
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </div>

                <div
                  className={cn(
                    "absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-background border border-border px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 shadow-sm transition-all duration-1000 ease-out card-hover",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: "1100ms" }}
                >
                  <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    IQAC
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base font-serif text-foreground">
                    Head of Department
                  </p>
                </div>

                <div
                  className={cn(
                    "absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 bg-foreground text-background px-3 py-2 sm:px-4 sm:py-2.5 hidden sm:block transition-all duration-1000 ease-out",
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: "1200ms" }}
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif">
                    15+
                  </p>
                  <p className="text-[9px] sm:text-[10px] tracking-[0.1em] uppercase opacity-70">
                    Years Experience
                  </p>
                </div>

                <div
                  className={cn(
                    "absolute -right-4 sm:-right-6 lg:-right-8 top-1/3 hidden md:grid grid-cols-3 gap-1.5 lg:gap-2 transition-all duration-1000 ease-out",
                    isLoaded
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  )}
                  style={{ transitionDelay: "1300ms" }}
                >
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-foreground/15"
                      style={{
                        animationDelay: `${i * 100}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "shrink-0 pb-6 lg:pb-8 transition-all duration-1000 ease-out",
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
        style={{ transitionDelay: "1400ms" }}
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <div className="border-t border-border/40 pt-4 lg:pt-5">
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/60 mb-3">
              Areas of Expertise
            </p>
          </div>
        </div>

        {/* Full-width carousel */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex animate-carousel">
            {[...expertise, ...expertise, ...expertise].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4 sm:px-6 lg:px-8 flex items-center gap-4 sm:gap-6 lg:gap-8"
              >
                <span className="text-sm lg:text-base font-serif text-muted-foreground/70 whitespace-nowrap hover:text-foreground transition-colors duration-500 cursor-default">
                  {item}
                </span>
                <span className="w-1 h-1 rounded-full bg-foreground/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 transition-all duration-1000",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: "1600ms" }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-foreground/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
