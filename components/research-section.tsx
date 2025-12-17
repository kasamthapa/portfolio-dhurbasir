"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const researchAreas = [
  "Postcolonial Literature",
  "Eastern Philosophy",
  "Public Administration",
  "FinTech Trends",
  "Entrepreneurial Behavior",
  "Educational Quality",
]

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
]

export function ResearchSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="research"
      ref={ref}
      className="py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-foreground text-background"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 xl:gap-32">
          {/* Section Label */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-background/50">Research</span>
              <div className="w-8 h-px bg-background/20 mt-6" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-20 md:space-y-24 lg:space-y-32">
            <div
              className={cn(
                "transition-all duration-1000 ease-out delay-150",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <h3 className="text-[11px] tracking-[0.25em] uppercase text-background/50 mb-8 md:mb-10">Focus Areas</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {researchAreas.map((area) => (
                  <span
                    key={area}
                    className="px-4 sm:px-5 py-2.5 sm:py-3 border border-background/15 text-[13px] sm:text-sm text-background/70 hover:text-background hover:border-background/40 transition-all duration-500"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={cn(
                "grid sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 transition-all duration-1000 ease-out delay-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              {publications.map((pub) => (
                <div key={pub.type} className="space-y-4">
                  <span className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background tracking-tight">
                    {pub.count}
                  </span>
                  <h4 className="text-sm sm:text-base font-serif text-background">{pub.type}</h4>
                  <p className="text-[13px] sm:text-sm text-background/50 leading-relaxed">{pub.description}</p>
                </div>
              ))}
            </div>

            {/* Author Note */}
            <div
              className={cn(
                "pt-16 md:pt-20 border-t border-background/10 transition-all duration-1000 ease-out delay-450",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <p className="text-[15px] sm:text-base text-background/50 leading-[1.8] max-w-2xl">
                Editor-in-Chief and Author at Sunrise Publications, Guinness Publications, and Megha Publications —
                contributing to curriculum development across Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
