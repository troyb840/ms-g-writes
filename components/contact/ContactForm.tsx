"use client";

import { useState } from "react";
import { Heart, Send } from "lucide-react";

const SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "book-event", label: "Book an Event" },
  { value: "media-press", label: "Media & Press" },
  { value: "other", label: "Other" },
];

type FormState = "idle" | "submitting" | "success";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // TODO: wire up real email sending (Resend API)
    setTimeout(() => setState("success"), 700);
  }

  if (state === "success") {
    return (
      <div className="card-warm py-16 text-center">
        <Heart size={40} fill="currentColor" className="mx-auto text-coral-300" />
        <p className="mt-4 font-script text-4xl text-coral">Thank you!</p>
        <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-terracotta/75">
          Thank you for reaching out. You will hear from me soon!
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-card border border-terracotta/15 bg-cream px-4 py-3 text-sm text-terracotta placeholder:text-terracotta/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/25 transition-colors";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-[0.1em] text-terracotta/60 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className={labelClass}>
            Name <span className="text-coral">*</span>
          </label>
          <input
            id="ct-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="ct-email" className={labelClass}>
            Email <span className="text-coral">*</span>
          </label>
          <input
            id="ct-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="ct-subject" className={labelClass}>
          What's this about? <span className="text-coral">*</span>
        </label>
        <select id="ct-subject" name="subject" required className={inputClass}>
          <option value="">Select a subject</option>
          {SUBJECTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="ct-message" className={labelClass}>
          Message <span className="text-coral">*</span>
        </label>
        <textarea
          id="ct-message"
          name="message"
          required
          rows={6}
          placeholder="Tell Ms. G what's on your heart…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-coral px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-cream shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-400 hover:shadow-warm-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? (
          "Sending…"
        ) : (
          <>
            <Send size={14} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
