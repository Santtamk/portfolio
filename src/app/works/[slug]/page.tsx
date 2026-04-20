import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { siteContent, getWorkBySlug } from "@/lib/site-content";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteContent.works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    return {
      title: "Work Not Found",
    };
  }

  return {
    title: `${work.title} | Ari Solace`,
    description: work.summary,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="flex-1 pb-20 pt-8 md:pt-12">
      <Container>
        <Reveal>
          <Link
            href="/"
            className="inline-flex rounded-full border border-[var(--line)] bg-[var(--panel-bg)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
          >
            Back to portfolio
          </Link>
        </Reveal>

        <Reveal>
          <article className="mt-5 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_16px_58px_rgba(4,8,18,0.38)] backdrop-blur md:mt-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted-ink)]">
              {work.category}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-[var(--ink)] md:text-5xl">
              {work.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--body-ink)] md:text-lg">
              {work.summary}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel-bg)] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.13em] text-[var(--muted-ink)]">
                  Problem
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                  {work.problem}
                </p>
              </section>

              <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel-bg)] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.13em] text-[var(--muted-ink)]">
                  Approach
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                  {work.approach}
                </p>
              </section>

              <section className="rounded-2xl border border-[var(--line)] bg-[var(--panel-bg)] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.13em] text-[var(--muted-ink)]">
                  Outcome
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--body-ink)] md:text-base">
                  {work.outcome}
                </p>
              </section>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {work.tech.map((tech) => (
                <li
                  key={`${work.slug}-${tech}`}
                  className="rounded-full border border-[var(--line)] bg-[var(--panel-bg)] px-3 py-1 text-xs font-semibold text-[var(--ink)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </Container>
    </main>
  );
}
