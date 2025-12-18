"use client";

import type React from "react";

import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";
import { cn } from "@/lib/utils";

const researchAreas = [
  "Postcolonial Literature",
  "Eastern Philosophy",
  "Public Administration",
  "FinTech Trends",
  "Entrepreneurial Behavior",
  "Educational Quality",
];

const publications = [
  {
    type: "Books",
    count: 45,
    suffix: "+",
    description: "Textbooks widely used across Nepal",
  },
  {
    type: "Articles",
    count: 20,
    suffix: "+",
    description: "Research articles in journals",
  },
  {
    type: "Workshops",
    count: 70,
    suffix: "+",
    description: "Professional development sessions",
  },
];

function PublicationStat({
  type,
  count,
  suffix,
  description,
  delay,
}: {
  type: string;
  count: number;
  suffix: string;
  description: string;
  delay: number;
}) {
  const { count: animatedCount, ref } = useCounter({
    end: count,
    duration: 2000,
    delay,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="space-y-1 sm:space-y-2 group"
    >
      <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background tracking-tight tabular-nums">
        {animatedCount}
        {suffix}
      </span>
      <h4 className="text-xs sm:text-sm font-serif text-background">{type}</h4>
      <p className="hidden sm:block text-xs text-background/50 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export function ResearchSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="research"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-foreground text-background overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">
          {/* Section Label */}
          <div className="lg:w-48 shrink-0">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-background/50">
                03 — Research
              </span>
              <div
                className={cn(
                  "h-px bg-background/20 mt-4 transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "200ms" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-10 md:space-y-14">
            {/* Focus Areas */}
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "150ms" }}
            >
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-4 md:mb-6">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {researchAreas.map((area, index) => (
                  <span
                    key={area}
                    className={cn(
                      "px-3 py-1.5 sm:px-4 sm:py-2 border border-background/15 text-xs sm:text-sm text-background/70 hover:text-background hover:border-background/40 hover:bg-background/5 transition-all duration-500 cursor-default",
                      isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${300 + index * 75}ms` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={cn(
                "grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "500ms" }}
            >
              {publications.map((pub, index) => (
                <PublicationStat key={pub.type} {...pub} delay={index * 200} />
              ))}
            </div>

            {/* Author Note */}
            <div
              className={cn(
                "pt-8 md:pt-10 border-t border-background/10 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "700ms" }}
            >
              <p className="text-xs sm:text-sm text-background/50 leading-relaxed max-w-xl">
                Editor-in-Chief and Author at Sunrise Publications, Guinness
                Publications, and Megha Publications — contributing to
                curriculum development across Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
