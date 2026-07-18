"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: React.ReactNode;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power2.out",
  baseColor = "var(--accent-ink)",
  pillColor = "var(--surface)",
  hoveredPillTextColor = "var(--surface)",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = false,
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.5, ease, overwrite: "auto" }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.5, ease, overwrite: "auto" }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.5, ease, overwrite: "auto" }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { visibility: "hidden", opacity: 0, y: 10 });
    }

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.set(logoRef.current, { scale: 0.9, autoAlpha: 0 });
        gsap.to(logoRef.current, { scale: 1, autoAlpha: 1, duration: 0.45, ease });
      }

      if (navItemsRef.current) {
        gsap.fromTo(navItemsRef.current, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.45, ease });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.25,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    if (!logoRef.current) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.fromTo(
      logoRef.current,
      { rotate: 0 },
      { rotate: 6, duration: 0.2, ease, yoyo: true, repeat: 1, overwrite: "auto" },
    );
  };

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);

    const menu = mobileMenuRef.current;
    const hamburger = hamburgerRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll<HTMLElement>(".hamburger-line");
      if (nextState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.25, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.25, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.2, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.2, ease });
      }
    }

    if (menu) {
      if (nextState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return;
    toggleMobileMenu();
  };

  const cssVars = {
    ["--base" as string]: baseColor,
    ["--pill-bg" as string]: pillColor,
    ["--hover-text" as string]: hoveredPillTextColor,
    ["--pill-text" as string]: resolvedPillTextColor,
    ["--nav-h" as string]: "42px",
    ["--logo-size" as string]: "42px",
    ["--pill-pad-x" as string]: "18px",
    ["--pill-gap" as string]: "3px",
  } as React.CSSProperties;

  return (
    <div className={`w-full ${className}`}>
      <nav
        className="mx-auto flex w-full items-center justify-between px-5 md:justify-center md:gap-0 md:px-8"
        aria-label="Primary"
        style={cssVars}
      >
        <Link
          href="/"
          aria-label={logoAlt}
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
          className="inline-flex h-(--logo-size) items-center justify-center rounded-full border border-[var(--line)] bg-transparent px-4 font-serif text-base font-semibold tracking-tight text-[var(--ink)] transition hover:border-[var(--accent-ink)] md:relative md:z-10"
        >
          {logo}
        </Link>

        <div
          ref={navItemsRef}
          className="relative ml-0 hidden items-center rounded-full bg-(--accent-ink) p-[2px] md:-ml-1 md:flex"
        >
          <ul role="menubar" className="m-0 flex h-(--nav-h) list-none items-stretch p-0.75" style={{ gap: "var(--pill-gap)" }}>
            {items.map((item, i) => {
              return (
                <li key={item.href} role="none" className="flex h-full">
                  <Link
                    role="menuitem"
                    href={item.href}
                    className="relative inline-flex h-full items-center justify-center overflow-hidden rounded-full px-(--pill-pad-x) text-sm font-semibold"
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    style={{
                      background: "var(--pill-bg)",
                      color: "var(--pill-text)",
                    }}
                  >
                    <span
                      className="hover-circle pointer-events-none absolute left-1/2 bottom-0 z-1 block rounded-full"
                      style={{ background: "var(--base)", willChange: "transform" }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack relative z-2 inline-block leading-none">
                      <span className="pill-label relative z-2 inline-block leading-none">{item.label}</span>
                      <span
                        className="pill-label-hover absolute left-0 top-0 z-3 inline-block"
                        style={{ color: "var(--hover-text)", willChange: "transform, opacity" }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="flex h-(--nav-h) w-(--nav-h) flex-col items-center justify-center gap-1 rounded-full border-[0.8px] border-(--line) bg-(--surface) md:hidden"
        >
          <span className="hamburger-line h-0.5 w-4 rounded" style={{ background: "var(--base)" }} />
          <span className="hamburger-line h-0.5 w-4 rounded" style={{ background: "var(--base)" }} />
        </button>
      </nav>

      <div
        ref={mobileMenuRef}
        className="absolute left-5 right-5 z-50 mt-2 rounded-2xl border-[0.8px] border-(--line) bg-(--surface) p-2 shadow-[0_10px_26px_rgba(24,24,24,0.1)] md:hidden"
      >
        <ul className="m-0 flex list-none flex-col gap-0.75 p-0">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={`mobile-${item.href}`}>
                <Link
                  href={item.href}
                  className={`block rounded-[50px] px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-(--accent-ink) text-(--surface)"
                      : "bg-(--pill-bg) text-(--pill-text)"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
