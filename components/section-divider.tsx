"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "default" | "accent" | "minimal";
}

export function SectionDivider({ variant = "default" }: SectionDividerProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.5,
  });

  if (variant === "minimal") {
    return (
      <div
        ref={ref}
        className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      >
        <div className="max-w-[1800px] mx-auto">
          <div
            className={cn(
              "h-px bg-gradient-to-r from-transparent via-border to-transparent transition-all duration-1000",
              isInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            )}
          />
        </div>
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div
        ref={ref}
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
      >
        <div className="max-w-[1800px] mx-auto flex items-center gap-6">
          <div
            className={cn(
              "flex-1 h-px bg-border transition-all duration-1000 origin-left",
              isInView ? "scale-x-100" : "scale-x-0"
            )}
          />
          <div
            className={cn(
              "flex items-center gap-2 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-1.5 bg-foreground/30 transition-all duration-500",
                  isInView ? "scale-100" : "scale-0"
                )}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              />
            ))}
          </div>
          <div
            className={cn(
              "flex-1 h-px bg-border transition-all duration-1000 origin-right",
              isInView ? "scale-x-100" : "scale-x-0"
            )}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto relative">
        <div
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 w-16 h-px bg-border transition-all duration-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 w-16 h-px bg-border transition-all duration-700",
            isInView ? "opacity-100" : "opacity-0"
          )}
        />
        <p
          className={cn(
            "text-center text-[10px] tracking-[0.4em] uppercase text-muted-foreground/50 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          ✦
        </p>
      </div>
    </div>
  );
}
