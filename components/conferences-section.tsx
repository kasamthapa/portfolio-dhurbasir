"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

const conferences = [
  {
    title: "Application of APA 7 for Academic Writing",
    event: "8th International Seminar PSDKU UNS",
    location: "Salatiga, Central Java, Indonesia",
    year: "2025",
    highlight: "Best Paper Award",
  },
  {
    title: "Postcolonial Discourse in Kiran Desai's The Inheritance of Loss",
    event: "10th International TESOL Conference",
    location: "Kathmandu, Nepal",
    year: "2024",
  },
  {
    title: "Integrating Soft Skills in Curriculum Development",
    event: "International Conference on Education",
    location: "Virtual",
    year: "2024",
  },
  {
    title: "Quality Assurance in Higher Education Institutions",
    event: "South Asian Education Summit",
    location: "New Delhi, India",
    year: "2023",
  },
];

export function ConferencesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-32 sm:py-40 md:py-48 lg:py-56 xl:py-64 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-secondary/30"
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
                Conferences
              </span>
              <div className="hidden lg:block mt-8">
                <h2 className="font-serif text-2xl xl:text-3xl text-foreground leading-tight">
                  Paper Presentations
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 xl:col-span-10">
            {/* Mobile heading */}
            <h2
              className={cn(
                "lg:hidden font-serif text-2xl sm:text-3xl text-foreground leading-tight mb-12 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Paper Presentations
            </h2>

            <div className="space-y-0">
              {conferences.map((conf, index) => (
                <div
                  key={index}
                  className={cn(
                    "group border-t border-border/50 py-10 sm:py-12 transition-all duration-1000 ease-out",
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">
                    <div className="sm:col-span-2 lg:col-span-1">
                      <span className="text-xs font-mono text-muted-foreground/60">
                        {conf.year}
                      </span>
                    </div>
                    <div className="sm:col-span-10 lg:col-span-11 space-y-3">
                      <div className="flex flex-wrap items-start gap-3">
                        <h3 className="text-lg lg:text-xl font-serif text-foreground group-hover:text-muted-foreground transition-colors duration-500 leading-snug">
                          {conf.title}
                        </h3>
                        {conf.highlight && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-foreground text-background text-[10px] tracking-wide uppercase">
                            <Award className="w-3 h-3" />
                            {conf.highlight}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {conf.event}
                      </p>
                      <p className="text-xs text-muted-foreground/60">
                        {conf.location}
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
