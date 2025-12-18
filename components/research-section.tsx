"use client";

import { useInView } from "@/hooks/use-in-view";
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
    count: "45+",
    description: "Textbooks widely used across Nepal",
  },
  {
    type: "Articles",
    count: "20+",
    description: "Research articles in journals",
  },
  {
    type: "Workshops",
    count: "70+",
    description: "Professional development sessions",
  },
];

export function ResearchSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="research"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-foreground text-background overflow-x-hidden max-w-full"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
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
                Research
              </span>
              <div className="w-8 h-px bg-background/20 mt-4" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-10 md:space-y-12">
            {/* Focus Areas */}
            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-150",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-4 md:mb-6">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 border border-background/15 text-xs sm:text-sm text-background/70 hover:text-background hover:border-background/40 transition-all duration-500"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Publications Stats */}
            <div
              className={cn(
                "grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 transition-all duration-1000 ease-out delay-300",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              {publications.map((pub) => (
                <div key={pub.type} className="space-y-1 sm:space-y-2">
                  <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-background tracking-tight">
                    {pub.count}
                  </span>
                  <h4 className="text-xs sm:text-sm font-serif text-background">
                    {pub.type}
                  </h4>
                  <p className="hidden sm:block text-xs text-background/50 leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Author Note */}
            <div
              className={cn(
                "pt-8 md:pt-10 border-t border-background/10 transition-all duration-1000 ease-out delay-450",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
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
