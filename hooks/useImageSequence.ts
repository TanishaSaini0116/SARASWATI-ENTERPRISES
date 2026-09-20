"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface UseImageSequenceProps {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  frameCount: number;
  imagePathGenerator: (index: number) => string;
  scrollTriggerOptions?: ScrollTrigger.Vars;
}

export function useImageSequence({
  canvasRef,
  frameCount,
  imagePathGenerator,
  scrollTriggerOptions,
}: UseImageSequenceProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ frame: 0 });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // Preload all frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = imagePathGenerator(i);
      
      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        }
      };

      img.onload = onImageLoad;
      img.onerror = onImageLoad; // Don't hang if an image fails

      images.push(img);
    }
    
    imagesRef.current = images;
  }, [frameCount, imagePathGenerator]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[frameRef.current.frame];
      if (img && img.complete && img.naturalWidth > 0) {
        // Draw image covering the canvas (object-fit: cover equivalent)
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Render initial frame
    render();

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(frameRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: canvas, 
          scrub: 0.5,
          ...scrollTriggerOptions,
        },
        onUpdate: render,
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      render();
    });

    const handleResize = () => {
      resizeCanvas();
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mm.revert();
    };
  }, [imagesLoaded, canvasRef, frameCount, scrollTriggerOptions]);

  return { imagesLoaded };
}
