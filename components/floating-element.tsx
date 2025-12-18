"use client";

import { useEffect, useState } from "react";

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div
        className="absolute w-96 h-96 border border-foreground/[0.02] rounded-full animate-float-slow"
        style={{ top: "10%", right: "-5%" }}
      />
      <div
        className="absolute w-64 h-64 border border-foreground/[0.03] rotate-45 animate-float-medium"
        style={{ top: "40%", left: "-3%" }}
      />
      <div
        className="absolute w-32 h-32 bg-foreground/[0.01] animate-float-fast"
        style={{ bottom: "20%", right: "10%" }}
      />
      {/* Subtle gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 animate-pulse-slow"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
