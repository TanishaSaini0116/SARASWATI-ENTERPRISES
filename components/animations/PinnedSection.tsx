"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface PinnedSectionProps {
  children: ReactNode;
  className?: string;
  end?: string;
}

export function PinnedSection({ children, className, end = "+=100%" }: PinnedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only pin on screens wider than 768px and if reduced motion is not preferred
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      if (!containerRef.current) return;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: end,
        pin: true,
        pinSpacing: true,
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      {children}
    </div>
  );
}
