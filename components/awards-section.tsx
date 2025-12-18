"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const awards = [
  {
    title: "Saikshik Sewa Samman",
    year: "2081 BS",
    organization: "Educational Service Recognition",
    description:
      "Outstanding contributions to educational service and academic development in Nepal.",
  },
  {
    title: "Best Paper Award",
    year: "2025",
    organization: "8th International Seminar PSDKU UNS, Indonesia",
    description:
      "Recognition for research excellence in academic writing methodologies.",
  },
  {
    title: "Achievers Award",
    year: "2023",
    organization: "Academic Leadership Recognition",
    description:
      "Excellence in academic leadership and institutional development.",
  },
  {
    title: "Teaching Excellence Award",
    year: "2017-2019",
    organization: "Kathmandu Model College",
    description:
      "Consecutive recognition for exceptional teaching and student mentorship.",
  },
];

const affiliations = [
  {
    title: "Certified Social Entrepreneur",
    organization: "Fil. Dr. Jan-Urban Sandal Institute, Norway",
  },
  {
    title: "Lifetime Member",
    organization: "Management Association of Nepal (MAN)",
  },
  {
    title: "Life Member & Executive",
    organization: "Linguistic Society of Nepal",
  },
  {
    title: "Member",
    organization: "Educational Studies Association of Nepal (ESAN)",
  },
];

export function AwardsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="recognition"
      ref={ref}
      className="py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 xl:gap-32">
          {/* Section Label */}
          <div className="lg:col-span-3 xl:col-span-2">
            <div
              className={cn(
                "lg:sticky lg:top-40 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70">
                05 — Recognition
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 xl:col-span-10 space-y-24 lg:space-y-32">
            {/* Awards - Editorial Timeline */}
            <div>
              <h2
                className={cn(
                  "font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight mb-12 lg:mb-16 transition-all duration-1000 ease-out delay-100",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                Awards & Honors
              </h2>

              <div className="space-y-0">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group relative border-t border-border/50 py-10 sm:py-12 lg:py-14 pl-0 lg:pl-8 transition-all duration-1000 ease-out",
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${150 + index * 80}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-0 top-12 lg:top-14 w-2 h-2 bg-foreground/20 group-hover:bg-foreground transition-colors duration-500" />

                    <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">
                      <div className="sm:col-span-3 lg:col-span-2">
                        <span className="text-xs font-mono text-muted-foreground/60">
                          {award.year}
                        </span>
                      </div>
                      <div className="sm:col-span-9 lg:col-span-10 space-y-3">
                        <h3 className="text-xl lg:text-2xl font-serif text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                          {award.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/70">
                          {award.organization}
                        </p>
                        <p className="text-[15px] text-muted-foreground leading-relaxed pt-1 max-w-2xl">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Affiliations */}
            <div>
              <h3
                className={cn(
                  "text-[11px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-10 transition-all duration-1000 ease-out delay-500",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                Professional Affiliations
              </h3>

              <div
                className={cn(
                  "grid sm:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 ease-out delay-600",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                {affiliations.map((affiliation, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-base lg:text-lg font-serif text-foreground">
                      {affiliation.title}
                    </h4>
                    <p className="text-sm text-muted-foreground/70">
                      {affiliation.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
