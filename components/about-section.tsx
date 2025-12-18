"use client";

import type React from "react";

import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

const stats = [
  { number: 15, suffix: "+", label: "Years" },
  { number: 45, suffix: "+", label: "Publications" },
  { number: 70, suffix: "+", label: "Workshops" },
  { number: 6, suffix: "", label: "Degrees" },
];

function StatCounter({
  number,
  suffix,
  label,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { count, ref } = useCounter({ end: number, duration: 2000, delay });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="space-y-2 group"
    >
      <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight tabular-nums transition-transform duration-500 group-hover:scale-105 inline-block">
        {count}
        {suffix}
      </span>
      <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Section Label */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div
              className={cn(
                "lg:sticky lg:top-32 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
                01 — About
              </span>
              <div
                className={cn(
                  "h-px bg-border mt-6 transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "300ms" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12 md:space-y-16 lg:space-y-20">
            <div className="overflow-hidden">
              <h2
                className={cn(
                  "font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] text-foreground transition-all duration-1000 ease-out text-balance",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: "150ms" }}
              >
                Advancing quality education through research, mentorship, and
                strategic vision.
              </h2>
            </div>

            <div
              className={cn(
                "grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12",
                isInView ? "opacity-100" : "opacity-0"
              )}
            >
              <p
                className={cn(
                  "text-sm sm:text-[15px] text-muted-foreground leading-[1.8] transition-all duration-1000 ease-out",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                As an academic leader, researcher, author, and educational
                consultant, I bring a multidisciplinary perspective to
                education, leadership, and institutional quality enhancement in
                South Asia.
              </p>
              <p
                className={cn(
                  "text-sm sm:text-[15px] text-muted-foreground leading-[1.8] transition-all duration-1000 ease-out",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: "450ms" }}
              >
                My academic foundation in English literature, political science,
                public administration, and law enables me to engage critically
                with issues of pedagogy, governance, policy, and research
                practices.
              </p>
            </div>

            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 pt-12 md:pt-16 border-t border-border transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "600ms" }}
            >
              {stats.map((stat, index) => (
                <StatCounter key={stat.label} {...stat} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
