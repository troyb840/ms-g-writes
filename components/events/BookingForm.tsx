"use client";

import { useState } from "react";
import { Heart, Send } from "lucide-react";

const EVENT_TYPES = [
  "Author visit / school literacy event",
  "Read-aloud session",
  "Church youth program or family event",
  "Community outreach event",
  "Speaking engagement / keynote",
  "Book signing / reading",
  "Writing workshop",
  "Conference or panel",
  "Other",
];

const BUDGET_RANGES = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000+",
  "Not sure yet",
];

type FormState = "idle" | "submitting" | "success";

export function BookingForm() {
  const [state, setState] = useState<FormState>("idle");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  function toggleType(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // TODO: wire up real email sending (Resend API)
    setTimeout(() => setState("success"), 800);
  }

  if (state === "success") {
    return (
      <div className="card-warm py-16 text-center">
        <Heart
          size={40}
          fill="currentColor"
          className="mx-auto text-coral-300"
        />
        <p className="mt-4 font-script text-4xl text-coral">Thank you!</p>
        <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-terracotta/75">
          Thank you for reaching out. You will hear from me soon!
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-card border border-terracotta/15 bg-cream px-4 py-3 text-sm text-terracotta placeholder:text-terracotta/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/25 transition-colors";
  const labelClass = "block text-xs font-semibold uppercase tracking-[0.1em] text-terracotta/60 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Organization */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-org" className={labelClass}>
            Organization / Host <span className="text-coral">*</span>
          </label>
          <input
            id="bk-org"
            name="organization"
            type="text"
            required
            placeholder="School, church, or organization name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bk-name" className={labelClass}>
            Your Name <span className="text-coral">*</span>
          </label>
          <input
            id="bk-name"
            name="contactName"
            type="text"
            required
            placeholder="Full name"
            className={inputClass}
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-email" className={labelClass}>
            Email <span className="text-coral">*</span>
          </label>
          <input
            id="bk-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bk-phone" className={labelClass}>
            Phone (optional)
          </label>
          <input
            id="bk-phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Event types */}
      <div>
        <p className={labelClass}>
          Type of Event <span className="text-coral">*</span>{" "}
          <span className="normal-case font-normal text-terracotta/40">
            (select all that apply)
          </span>
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {EVENT_TYPES.map((type) => {
            const active = selectedTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggleType(type)}
                className={`rounded-pill px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? "bg-coral text-cream shadow-warm"
                    : "bg-peach-100 text-terracotta/65 hover:bg-peach-200"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Date + Location */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-date" className={labelClass}>
            Proposed Date(s) <span className="text-coral">*</span>
          </label>
          <input
            id="bk-date"
            name="dates"
            type="text"
            required
            placeholder="e.g. May 15 or May 14–16, 2026"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bk-location" className={labelClass}>
            Location / City <span className="text-coral">*</span>
          </label>
          <input
            id="bk-location"
            name="location"
            type="text"
            required
            placeholder="City, State"
            className={inputClass}
          />
        </div>
      </div>

      {/* Audience + Format */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-audience" className={labelClass}>
            Estimated Audience Size
          </label>
          <input
            id="bk-audience"
            name="audienceSize"
            type="text"
            placeholder="e.g. 50–100 students"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="bk-format" className={labelClass}>
            Format <span className="text-coral">*</span>
          </label>
          <select
            id="bk-format"
            name="format"
            required
            className={inputClass}
          >
            <option value="">Select format</option>
            <option value="in-person">In-Person</option>
            <option value="virtual">Virtual</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="bk-budget" className={labelClass}>
          Budget Range
        </label>
        <select id="bk-budget" name="budget" className={inputClass}>
          <option value="">Select a range</option>
          {BUDGET_RANGES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Vision / description */}
      <div>
        <label htmlFor="bk-vision" className={labelClass}>
          Your Vision for the Event <span className="text-coral">*</span>
        </label>
        <textarea
          id="bk-vision"
          name="vision"
          required
          rows={5}
          placeholder="Tell Ms. G about your event — the audience, what you're hoping she'll bring, any themes or goals you have in mind…"
          className={inputClass}
        />
      </div>

      {/* Additional notes */}
      <div>
        <label htmlFor="bk-notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea
          id="bk-notes"
          name="notes"
          rows={3}
          placeholder="Anything else you'd like her to know?"
          className={inputClass}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting" || selectedTypes.length === 0}
        className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-coral px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-cream shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-400 hover:shadow-warm-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? (
          "Sending…"
        ) : (
          <>
            <Send size={14} />
            Send Booking Inquiry
          </>
        )}
      </button>

      {selectedTypes.length === 0 && (
        <p className="text-xs text-terracotta/40">
          Please select at least one event type above.
        </p>
      )}
    </form>
  );
}
