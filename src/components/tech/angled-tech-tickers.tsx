type AngledTechTickersProps = {
  rows: string[][];
};

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const scrollingItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[0_4px_14px_rgba(24,24,24,0.07)]">
      <ul
        className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {scrollingItems.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="shrink-0 rounded-full bg-[var(--chip-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--chip-ink)] md:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AngledTechTickers({ rows }: AngledTechTickersProps) {
  return (
    <div className="space-y-4 py-3">
      <div className="-rotate-2 md:-rotate-3">
        <MarqueeRow items={rows[0] ?? []} />
      </div>
      <div className="rotate-2 md:rotate-3">
        <MarqueeRow items={rows[1] ?? []} reverse />
      </div>
    </div>
  );
}
