"use client";

import type React from "react";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import {
  Loader2,
  Send,
  CheckCircle,
  Download,
  ArrowUpRight,
} from "lucide-react";
import { MagneticButton } from "./magnetic-button";

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-24 md:py-32 lg:py-40 xl:py-48 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-secondary/40 overflow-hidden"
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
                07 — Contact
              </span>
              <div
                className={cn(
                  "h-px bg-border mt-6 transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "200ms" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10 md:space-y-14">
            <h2
              className={cn(
                "font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.15] text-foreground transition-all duration-1000 ease-out text-balance",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "150ms" }}
            >
              Let&apos;s discuss collaboration, research, or educational
              initiatives.
            </h2>

            <div
              className={cn(
                "grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "300ms" }}
            >
              {/* Contact Info */}
              <div className="space-y-8 sm:space-y-10">
                <div className="space-y-6">
                  {[
                    {
                      label: "Location",
                      value: "Kathmandu, Nepal",
                      href: null,
                    },
                    {
                      label: "Connect",
                      value: "LinkedIn",
                      href: "https://linkedin.com/in/dhurba-prasad-timalsina",
                    },
                    {
                      label: "Email",
                      value: "contact@dhurba.com",
                      href: "mailto:contact@dhurba.com",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className={cn(
                        "group transition-all duration-700 ease-out",
                        isInView
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      )}
                      style={{ transitionDelay: `${350 + index * 100}ms` }}
                    >
                      <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg text-foreground hover:text-muted-foreground transition-colors duration-500 group"
                        >
                          {item.value}
                          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base md:text-lg text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <p
                  className={cn(
                    "text-sm sm:text-[15px] text-muted-foreground leading-[1.8] transition-all duration-700 ease-out",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: "650ms" }}
                >
                  Open to academic collaborations, research opportunities,
                  educational consultancy, and speaking engagements.
                </p>

                <MagneticButton
                  as="a"
                  href="/cv.pdf"
                  className={cn(
                    "inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 text-sm tracking-wide group",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  // @ts-expect-error - MagneticButton doesn't have download prop
                  style={{ transitionDelay: "700ms" }}
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  <span>Download CV</span>
                </MagneticButton>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "What's this about?",
                  },
                ].map((field, index) => (
                  <div
                    key={field.id}
                    className={cn(
                      "space-y-1 transition-all duration-700 ease-out",
                      isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${400 + index * 75}ms` }}
                  >
                    <label
                      htmlFor={field.id}
                      className={cn(
                        "text-[11px] tracking-[0.2em] uppercase transition-colors duration-300",
                        focusedField === field.id
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      required
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.id]: e.target.value })
                      }
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div
                  className={cn(
                    "space-y-1 transition-all duration-700 ease-out",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: "625ms" }}
                >
                  <label
                    htmlFor="message"
                    className={cn(
                      "text-[11px] tracking-[0.2em] uppercase transition-colors duration-300",
                      focusedField === "message"
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
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
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "inline-flex items-center gap-3 mt-4 text-sm sm:text-base group transition-all duration-500",
                    status === "loading" && "opacity-70 cursor-not-allowed",
                    status === "success" ? "text-green-600" : "text-foreground",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: "700ms" }}
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
                      <span className="underline-animation">Send message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-500 animate-blur-in">
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
