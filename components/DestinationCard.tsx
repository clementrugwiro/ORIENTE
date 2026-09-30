import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Destination } from "@/types";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-cardHover focus-ring"
    >
      <div className="relative flex h-40 items-end overflow-hidden bg-gradient-to-br from-primary to-primary-light p-5">
        {destination.image ? (
          <>
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent"
            />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(120deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 18px)",
            }}
          />
        )}
        <span className="relative flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {destination.region}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-primary">
          {destination.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {destination.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-dark">
          Explore {destination.name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
