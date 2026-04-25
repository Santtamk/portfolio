"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type ContactFormProps = {
  ctaLabel: string;
};

const WEB3FORMS_ACCESS_KEY = "310b508b-2368-4dd1-8a1e-b8a112e0dba9";

export function ContactForm({ ctaLabel }: ContactFormProps) {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New conversation request from portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    const submitPromise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then(async (response) => {
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not send your message.");
      }

      return data;
    });

    toast.promise(submitPromise, {
      loading: "Sending your message...",
      success: "Message sent. I will get back to you shortly.",
      error: (error) =>
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
    });

    try {
      await submitPromise;
      setResult("Form submitted successfully.");
      form.reset();
    } catch {
      setResult("Could not send the form. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 grid gap-3 md:mt-7 md:grid-cols-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="rounded-2xl border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted-ink)] focus:ring-2 focus:ring-[var(--accent-ink)]/20"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="rounded-2xl border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted-ink)] focus:ring-2 focus:ring-[var(--accent-ink)]/20"
      />
      <textarea
        name="message"
        placeholder="Tell me about your product, challenge, or goal"
        required
        rows={5}
        className="rounded-2xl border border-[0.8px] border-[var(--line)] bg-[var(--panel-bg)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition placeholder:text-[var(--muted-ink)] focus:ring-2 focus:ring-[var(--accent-ink)]/20 md:col-span-2"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--accent-ink)] px-5 py-3 text-sm font-semibold text-[var(--surface)] transition hover:opacity-92"
      >
        {ctaLabel}
      </button>
      <p
        className="self-center text-sm text-[var(--muted-ink)]"
        aria-live="polite"
      >
        {result}
      </p>
    </form>
  );
}
