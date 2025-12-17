"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const awards = [
  {
    title: "Saikshik Sewa Samman",
    year: "2081 BS",
    description: "Outstanding contributions to educational service",
  },
  {
    title: "Achievers Award",
    year: "2023",
    description: "Academic leadership and research excellence",
  },
  {
    title: "Teaching Excellence",
    year: "Multiple",
    description: "Exceptional teaching and mentorship",
  },
]

const certifications = [
  {
    title: "Certified Social Entrepreneur",
    organization: "Jan-Urban Sandal Institute, Norway",
  },
  {
    title: "Life Member & Executive",
    organization: "Linguistic Society of Nepal",
  },
]

export function AwardsSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section
      id="awards"
      ref={ref}
      className="py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 xl:gap-32">
          {/* Section Label */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div
              className={cn(
                "lg:sticky lg:top-40 transition-all duration-1000 ease-out",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">Recognition</span>
              <div className="w-8 h-px bg-border mt-6 mb-8" />
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-tight">
                Awards &<br className="hidden sm:block" /> Certifications
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-20 md:space-y-24">
            {/* Awards */}
            <div className="space-y-0">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className={cn(
                    "group border-t border-border py-10 sm:py-12 md:py-14 transition-all duration-1000 ease-out",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                  )}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-serif text-foreground group-hover:opacity-60 transition-opacity duration-500">
                        {award.title}
                      </h4>
                      <p className="text-[15px] sm:text-base text-muted-foreground">{award.description}</p>
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-muted-foreground shrink-0">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 transition-all duration-1000 ease-out delay-400",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-serif text-base sm:text-lg md:text-xl text-foreground">{cert.title}</h4>
                  <p className="text-[13px] sm:text-sm text-muted-foreground">{cert.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
