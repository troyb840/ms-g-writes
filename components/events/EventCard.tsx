"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Monitor, Layers, Calendar } from "lucide-react";
import { urlFor } from "@/lib/sanity";

export type EventCardData = {
  _id: string;
  title: string;
  slug?: string;
  startDateTime: string;
  endDateTime?: string;
  format: "in-person" | "virtual" | "hybrid";
  eventType?: string;
  venueName?: string;
  location?: string;
  description?: string;
  rsvpUrl?: string;
  image?: any;
};

const FORMAT_ICONS = {
  "in-person": MapPin,
  virtual: Monitor,
  hybrid: Layers,
};

const FORMAT_LABELS = {
  "in-person": "In Person",
  virtual: "Virtual",
  hybrid: "Hybrid",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

type Props = {
  event: EventCardData;
  variant?: "upcoming" | "past";
};

export function EventCard({ event, variant = "upcoming" }: Props) {
  const FormatIcon = FORMAT_ICONS[event.format] ?? MapPin;
  const imageUrl = event.image
    ? urlFor(event.image).width(600).height(340).fit("crop").url()
    : null;

  if (variant === "past") {
    return (
      <article className="card-warm flex items-center gap-5 p-5">
        {imageUrl && (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-card">
            <Image src={imageUrl} alt={event.title} fill className="object-cover" sizes="64px" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-xs text-terracotta/50">
            {formatDate(event.startDateTime)}
          </p>
          <h3 className="mt-0.5 truncate font-display text-sm text-olive">
            {event.title}
          </h3>
          {event.location && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-terracotta/60">
              <FormatIcon size={10} />
              {event.location}
            </p>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="card-warm overflow-hidden">
      {/* Event image */}
      {imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden bg-peach-100">
          <Image
            src={imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6">
        {/* Date + format */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-peach-100 px-3 py-1 text-xs font-semibold text-terracotta/70">
            <Calendar size={11} />
            {formatDate(event.startDateTime)}
          </div>
          <div className="flex items-center gap-1 text-xs text-terracotta/50">
            <FormatIcon size={11} />
            {FORMAT_LABELS[event.format]}
          </div>
        </div>

        {event.eventType && (
          <p className="eyebrow text-coral/70">{event.eventType}</p>
        )}

        <h3 className="font-display text-xl text-olive">{event.title}</h3>

        {(event.venueName || event.location) && (
          <p className="flex items-center gap-1.5 text-sm text-terracotta/65">
            <MapPin size={13} />
            {[event.venueName, event.location].filter(Boolean).join(" · ")}
          </p>
        )}

        {event.description && (
          <p className="text-sm leading-relaxed text-terracotta/75">
            {event.description}
          </p>
        )}

        {event.rsvpUrl && (
          <a
            href={event.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-auto self-start"
          >
            <Heart size={13} fill="currentColor" />
            RSVP
          </a>
        )}
      </div>
    </article>
  );
}
