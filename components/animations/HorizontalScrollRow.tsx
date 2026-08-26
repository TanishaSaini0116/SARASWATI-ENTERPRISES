"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface HorizontalScrollRowProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export function HorizontalScrollRow({ children, className, wrapperClassName }: HorizontalScrollRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // Desktop: Pin and horizontal scroll
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      if (!containerRef.current || !scrollWrapperRef.current) return;

      const scrollWidth = scrollWrapperRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      
      const distanceToTranslate = scrollWidth - clientWidth;

      if (distanceToTranslate > 0) {
        gsap.to(scrollWrapperRef.current, {
          x: -distanceToTranslate,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${distanceToTranslate}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      <div 
        ref={scrollWrapperRef} 
        className={cn(
          "flex flex-col md:flex-row md:flex-nowrap md:w-max md:min-w-full",
          wrapperClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
