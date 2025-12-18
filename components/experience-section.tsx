"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

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
      className="py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-secondary/40"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20 xl:gap-32">
          {/* Section Label */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div
              className={cn(
                "lg:sticky lg:top-40 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
                Experience
              </span>
              <div className="w-8 h-px bg-border mt-6 mb-8" />
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-tight">
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
                    "group border-t border-border py-10 sm:py-12 md:py-14 lg:py-16 transition-all duration-1000 ease-out",
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="grid sm:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
                    <div className="sm:col-span-4 md:col-span-3">
                      <span className="text-[11px] sm:text-xs text-muted-foreground font-mono tracking-wide">
                        {exp.period}
                      </span>
                    </div>
                    <div className="sm:col-span-8 md:col-span-9 space-y-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-foreground group-hover:opacity-60 transition-opacity duration-500">
                        {exp.title}
                      </h3>
                      <p className="text-[13px] sm:text-sm text-muted-foreground">
                        {exp.organization}
                      </p>
                      <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed pt-2">
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
