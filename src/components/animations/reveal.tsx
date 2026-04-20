"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementRef.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, elementRef);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
