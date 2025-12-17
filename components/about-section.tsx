"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-x-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
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
                About
              </span>
              <div className="w-8 h-px bg-border mt-6" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10 md:space-y-14 lg:space-y-16">
            <h2
              className={cn(
                "font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.2] text-foreground transition-all duration-1000 ease-out delay-150",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Advancing quality education through research, mentorship, and
              strategic vision.
            </h2>

            <div
              className={cn(
                "grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 transition-all duration-1000 ease-out delay-300",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-[1.8]">
                As an academic leader, researcher, author, and educational
                consultant, I bring a multidisciplinary perspective to
                education, leadership, and institutional quality enhancement in
                South Asia.
              </p>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-[1.8]">
                My academic foundation in English literature, political science,
                public administration, and law enables me to engage critically
                with issues of pedagogy, governance, policy, and research
                practices.
              </p>
            </div>

            <div
              className={cn(
                "grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 pt-10 md:pt-14 border-t border-border transition-all duration-1000 ease-out delay-450",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              {[
                { number: "15+", label: "Years" },
                { number: "45+", label: "Publications" },
                { number: "70+", label: "Workshops" },
                { number: "6", label: "Degrees" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
                    {stat.number}
                  </span>
                  <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
