"use client";

import React, { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface FannedCardStackProps {
  children: ReactNode;
  className?: string;
}

export function FannedCardStack({ children, className }: FannedCardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const childArray = React.Children.toArray(children);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      if (!containerRef.current) return;
      const cards = cardsRef.current.filter(Boolean);

      // Initial state
      gsap.set(cards, {
        position: "absolute",
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0.8,
        rotation: 0,
        zIndex: (i) => i
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        }
      });

      const totalCards = cards.length;
      const maxAngle = 15; 
      const spreadX = 25; // xPercent offset multiplier

      cards.forEach((card, i) => {
        const progress = totalCards > 1 ? i / (totalCards - 1) : 0.5;
        const normalized = (progress - 0.5) * 2; 

        tl.to(card, {
          opacity: 1,
          scale: 1,
          rotation: normalized * maxAngle,
          xPercent: -50 + (normalized * spreadX),
          yPercent: -50 + (Math.abs(normalized) * 15),
          ease: "power2.out"
        }, 0);
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={cn("relative min-h-[60vh] flex flex-col md:block items-center justify-center overflow-hidden py-12 md:py-0", className)}>
      <div className="md:hidden flex flex-col gap-6 px-4 w-full items-center">
        {childArray.map((child, i) => (
          <div key={i} className="w-full max-w-sm">
            {child}
          </div>
        ))}
      </div>
      
      <div className="hidden md:block w-full h-full absolute inset-0">
        {childArray.map((child, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="absolute shadow-2xl rounded-xl overflow-hidden"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
