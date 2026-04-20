import Link from "next/link";
import type { WorkItem } from "@/lib/site-content";

type WorkCardProps = {
  work: WorkItem;
};

export function WorkCard({ work }: WorkCardProps) {
  const isFeaturedDark = work.featuredTheme === "dark";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border-[0.8px] border-(--line) p-6 shadow-[0_4px_14px_rgba(24,24,24,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(24,24,24,0.1)] ${
        isFeaturedDark ? "text-white" : "bg-(--surface)"
      }`}
    >
      {work.featuredImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${work.featuredImage})` }}
            aria-hidden
          />
          <div
            className={`absolute inset-0 ${
              isFeaturedDark
                ? "bg-[linear-gradient(180deg,rgba(10,10,10,0.26),rgba(10,10,10,0.72))]"
                : "bg-[linear-gradient(180deg,rgba(248,246,242,0.28),rgba(248,246,242,0.86))]"
            }`}
            aria-hidden
          />
        </>
      ) : null}

      <div className={`relative z-10 flex h-full flex-col ${work.featuredImage ? "justify-between" : ""}`}>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${isFeaturedDark ? "text-white/80" : "text-(--muted-ink)"}`}>
            {work.category}
          </span>
          <span className={`h-2.5 w-16 rounded-full bg-linear-to-r ${work.accent}`} aria-hidden />
        </div>

        <h3 className={`font-serif text-2xl ${isFeaturedDark ? "text-white" : "text-(--ink)"}`}>
          {work.title}
        </h3>
        <p className={`mt-2.5 text-sm leading-relaxed md:text-base ${isFeaturedDark ? "text-white/84" : "text-(--body-ink)"}`}>
          {work.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {work.tech.map((item) => (
            <li
              key={`${work.slug}-${item}`}
              className={`rounded-full border-[0.8px] px-3 py-1 text-xs font-medium ${
                isFeaturedDark
                  ? "border-white/18 bg-white/12 text-white"
                  : "border-(--line) bg-(--panel-bg) text-(--ink)"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={`/works/${work.slug}`}
          className={`mt-auto pt-5 inline-flex items-center text-sm font-semibold transition group-hover:translate-x-1 ${
            isFeaturedDark ? "text-white" : "text-(--accent-ink)"
          }`}
        >
          View case story
        </Link>
      </div>
    </article>
  );
}
