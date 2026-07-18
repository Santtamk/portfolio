"use client";

import { usePathname } from "next/navigation";
import PillNav from "@/components/ui/pill-nav";
import { siteContent } from "@/lib/site-content";

export function SiteHeader() {
  const { brandMark, nav } = siteContent;
  const pathname = usePathname();
  const logoNode = <span className="font-semibold text-[var(--ink)]">{brandMark}</span>;

  const activeHref = pathname === "/about" ? "/about" : "/";

  return (
    <header className="sticky top-0 z-40 bg-(--header-bg)/85 backdrop-blur">
      <div className="py-3">
        <PillNav
          logo={logoNode}
          logoAlt="Santam Logo"
          items={nav}
          activeHref={activeHref}
          ease="power2.out"
          baseColor="var(--accent-ink)"
          pillColor="var(--surface)"
          hoveredPillTextColor="var(--surface)"
          pillTextColor="var(--accent-ink)"
          initialLoadAnimation={false}
        />
      </div>
    </header>
  );
}
