import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 border-t border-border bg-background">
      <div className="max-w-[1800px] mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {/* Left - Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight">
              DPT
            </span>
            <span className="text-xs tracking-wide text-muted-foreground">
              © {new Date().getFullYear()} Dhurba Prasad Timalsina
            </span>
          </div>

          {/* Center - Location */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
              Location
            </span>
            <span className="text-sm text-foreground">Kathmandu, Nepal</span>
          </div>

          {/* Right - Social Link */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
              Connect
            </span>
            <a
              href="https://www.linkedin.com/in/dhurba-prasad-timalsina-0672811a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border/50" />

        {/* Developer Credit */}
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/kasamthapamagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Made with</span>
            <span className="text-red-500 group-hover:scale-110 transition-transform duration-300">
              ♥
            </span>
            <span>by</span>
            <span className="font-medium">Kasam Thapa Magar</span>
            <Linkedin className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}
