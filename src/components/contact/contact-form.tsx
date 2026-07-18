"use client";

import { useState } from "react";

type ContactFormProps = {
  ctaLabel?: string;
};

export function ContactForm({ ctaLabel = "Send message" }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Placeholder: implement real submit endpoint as needed
      await new Promise((r) => setTimeout(r, 600));
      setName("");
      setEmail("");
      setMessage("");
      console.log("Contact form submitted", { name, email, message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
      <div className="grid gap-2 md:grid-cols-2">
        <label className="flex flex-col">
          <span className="text-xs font-medium text-(--muted-ink)">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 rounded-lg border border-(--line) bg-(--surface) px-3 py-2 text-sm"
            placeholder="Your name"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-xs font-medium text-(--muted-ink)">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 rounded-lg border border-(--line) bg-(--surface) px-3 py-2 text-sm"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>

      <label className="flex flex-col">
        <span className="text-xs font-medium text-(--muted-ink)">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 min-h-[120px] rounded-lg border border-(--line) bg-(--surface) px-3 py-2 text-sm"
          placeholder="How can I help?"
          required
        />
      </label>

      <div className="mt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center rounded-full bg-[var(--accent-ink)] px-5 py-3 text-sm font-semibold text-[var(--surface)] transition disabled:opacity-60"
        >
          {submitting ? "Sending…" : ctaLabel}
        </button>
      </div>
    </form>
  );
}
