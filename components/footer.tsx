"use client";

import { Linkedin } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./magnetic-button";

export function Footer() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 border-t border-border bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-foreground rounded-t-full" />
      </div>

      <div className="max-w-[1800px] mx-auto relative">
        <div
          className={cn(
            "mb-12 lg:mb-16 overflow-hidden transition-all duration-1000 ease-out",
            isInView ? "opacity-100" : "opacity-0"
          )}
        >
          <h2
            className={cn(
              "font-serif text-[clamp(3rem,12vw,10rem)] leading-[0.85] text-foreground/[0.03] text-center select-none transition-all duration-1000",
              isInView ? "translate-y-0" : "translate-y-full"
            )}
          >
            DPT
          </h2>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {/* Left - Logo & Copyright */}
          <div
            className={cn(
              "flex flex-col items-center md:items-start gap-3 transition-all duration-1000 ease-out",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <MagneticButton as="a" href="/">
              <span className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight hover:opacity-60 transition-opacity duration-500">
                DPT
              </span>
            </MagneticButton>
            <span className="text-xs tracking-wide text-muted-foreground">
              © {currentYear} Dhurba Prasad Timalsina
            </span>
          </div>

          {/* Center - Location */}
          <div
            className={cn(
              "flex flex-col items-center gap-2 transition-all duration-1000 ease-out",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              Location
            </span>
            <span className="text-sm text-foreground">Kathmandu, Nepal</span>
          </div>

          {/* Right - Social Link */}
          <div
            className={cn(
              "flex flex-col items-center md:items-end gap-2 transition-all duration-1000 ease-out",
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
              Connect
            </span>
            <MagneticButton
              as="a"
              href="https://www.linkedin.com/in/dhurba-prasad-timalsina-0672811a7/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </MagneticButton>
          </div>
        </div>

        {/* Divider */}
        <div
          className={cn(
            "my-8 lg:my-10 h-px bg-border/50 transition-all duration-1000 ease-out",
            isInView ? "scale-x-100" : "scale-x-0"
          )}
          style={{ transitionDelay: "300ms" }}
        />

        {/* Developer Credit */}
        <div
          className={cn(
            "flex justify-center transition-all duration-1000 ease-out",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="https://www.linkedin.com/in/kasamthapamagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            <span>Made with</span>
            <span className="text-red-500 group-hover:scale-125 transition-transform duration-500">
              ♥
            </span>
            <span>by</span>
            <span className="font-medium underline-animation">
              Kasam Thapa Magar
            </span>
            <Linkedin className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        <div
          className={cn(
            "absolute right-0 bottom-0 transition-all duration-1000 ease-out hidden lg:block",
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <MagneticButton
            as="a"
            href="#"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-500 group"
          >
            <span className="tracking-[0.1em] uppercase">Back to top</span>
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
