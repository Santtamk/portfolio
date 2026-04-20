import { Container } from "@/components/ui/container";
import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  const { person } = siteContent;

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--header-bg)]/70 py-8">
      <Container className="flex flex-col gap-2 text-sm text-[var(--muted-ink)] md:flex-row md:items-center md:justify-between">
        <p>{person.name} - {person.role}</p>
        <p>{person.location}</p>
      </Container>
    </footer>
  );
}
