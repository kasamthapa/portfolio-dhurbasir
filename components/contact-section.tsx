"use client";

import type React from "react";

import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Loader2, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-secondary/40 overflow-x-hidden"
    >
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Section Label */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
                Contact
              </span>
              <div className="w-8 h-px bg-border mt-6" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10 md:space-y-14">
            <h2
              className={cn(
                "font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.2] text-foreground transition-all duration-1000 ease-out delay-150",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              Let&apos;s discuss collaboration, research, or educational
              initiatives.
            </h2>

            <div
              className={cn(
                "grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 transition-all duration-1000 ease-out delay-300",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              {/* Left Column - Contact Info */}
              <div className="space-y-8 sm:space-y-10">
                <div className="space-y-2">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    Location
                  </span>
                  <p className="text-sm sm:text-base md:text-lg text-foreground">
                    Kathmandu, Nepal
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    Connect
                  </span>
                  <a
                    href="https://linkedin.com/in/dhurba-prasad-timalsina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm sm:text-base md:text-lg text-foreground hover:opacity-60 transition-opacity duration-500"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="space-y-2">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    Email
                  </span>
                  <a
                    href="mailto:contact@dhurba.com"
                    className="block text-sm sm:text-base md:text-lg text-foreground hover:opacity-60 transition-opacity duration-500"
                  >
                    contact@dhurba.com
                  </a>
                </div>
                <p className="text-sm sm:text-[15px] text-muted-foreground leading-[1.8]">
                  Open to academic collaborations, research opportunities,
                  educational consultancy, and speaking engagements.
                </p>
              </div>

              {/* Right Column - Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="subject"
                    className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "inline-flex items-center gap-3 mt-4 text-sm sm:text-base text-foreground group transition-all duration-300",
                    status === "loading" && "opacity-70 cursor-not-allowed",
                    status === "success" && "text-green-600"
                  )}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Message sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
