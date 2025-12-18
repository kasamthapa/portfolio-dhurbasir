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
      className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Section Label */}
          <div className="lg:col-span-3 xl:col-span-2">
            <div
              className={cn(
                "lg:sticky lg:top-32 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70">
                05 — Recognition
              </span>
              <div
                className={cn(
                  "h-px bg-border mt-4 transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "200ms" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 xl:col-span-10 space-y-16 lg:space-y-24">
            {/* Awards */}
            <div>
              <h2
                className={cn(
                  "font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight mb-10 lg:mb-14 transition-all duration-1000 ease-out",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "100ms" }}
              >
                Awards & Honors
              </h2>

              <div className="space-y-0">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group relative border-t border-border/50 py-8 sm:py-10 lg:py-12 pl-0 lg:pl-8 transition-all duration-700 ease-out cursor-pointer",
                      isInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div
                      className={cn(
                        "hidden lg:block absolute left-0 top-10 lg:top-12 w-2 h-2 bg-foreground/20 group-hover:bg-foreground group-hover:scale-150 transition-all duration-500",
                        isInView ? "scale-100" : "scale-0"
                      )}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    />

                    <div className="grid sm:grid-cols-12 gap-3 sm:gap-4 md:gap-6">
                      <div className="sm:col-span-3 lg:col-span-2">
                        <span className="text-xs font-mono text-muted-foreground/60">
                          {award.year}
                        </span>
                      </div>
                      <div className="sm:col-span-9 lg:col-span-10 space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                          {award.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground/70">
                          {award.organization}
                        </p>
                        <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed pt-1 max-w-2xl group-hover:text-foreground/70 transition-colors duration-500">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div>
              <h3
                className={cn(
                  "text-[11px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-8 sm:mb-10 transition-all duration-1000 ease-out",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                Professional Affiliations
              </h3>

              <div
                className={cn(
                  "grid sm:grid-cols-2 gap-6 lg:gap-8 transition-all duration-1000 ease-out",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "700ms" }}
              >
                {affiliations.map((affiliation, index) => (
                  <div
                    key={index}
                    className={cn(
                      "group p-4 sm:p-5 lg:p-6 border border-transparent hover:border-border hover:bg-secondary/30 transition-all duration-500",
                      isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${750 + index * 75}ms` }}
                  >
                    <h4 className="text-base lg:text-lg font-serif text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                      {affiliation.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground/70 mt-1">
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
