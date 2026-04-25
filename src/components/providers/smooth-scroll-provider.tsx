"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "react-hot-toast";

type SmoothScrollProviderProps = {
  children: React.ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4200,
          style: {
            border: "1px solid var(--line)",
            background: "var(--surface)",
            color: "var(--ink)",
          },
        }}
      />
    </>
  );
}
