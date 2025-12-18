"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    title: "Head – Internal Quality Assurance Cell",
    organization: "Kathmandu Model College",
    description:
      "Lead institutional quality assurance and accreditation initiatives.",
  },
  {
    period: "Present",
    title: "Professor",
    organization: "International American University, California",
    description: "Teaching and mentoring in higher education.",
  },
  {
    period: "2021 — 2023",
    title: "Academic Head",
    organization: "Southwestern State College",
    description: "Oversaw academic programs and curriculum development.",
  },
  {
    period: "2011 — 2021",
    title: "Program Director",
    organization: "Kathmandu Model College",
    description: "Directed academic programs for a decade.",
  },
];

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-secondary/40"
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
                02 — Experience
              </span>
              <div
                className={cn(
                  "h-px bg-border mt-6 mb-8 transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "200ms" }}
              />
              <h2
                className={cn(
                  "font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-tight transition-all duration-1000 ease-out",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                Leadership &<br className="hidden sm:block" /> Academic Roles
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={cn(
                    "group border-t border-border py-8 sm:py-10 md:py-12 lg:py-14 transition-all duration-700 ease-out cursor-pointer",
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="grid sm:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start">
                    <div className="sm:col-span-4 md:col-span-3">
                      <span className="text-[11px] sm:text-xs text-muted-foreground font-mono tracking-wide">
                        {exp.period}
                      </span>
                    </div>
                    <div className="sm:col-span-8 md:col-span-9 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-foreground group-hover:text-muted-foreground transition-colors duration-500">
                          {exp.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground/0 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-[13px] sm:text-sm text-muted-foreground">
                        {exp.organization}
                      </p>
                      <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed pt-1 max-w-xl group-hover:text-foreground/70 transition-colors duration-500">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
