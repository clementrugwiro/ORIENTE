import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Plane } from "lucide-react";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  size = "lg",
  className,
  backgroundImage,
  imageAlt = "",
  overlay = "dark",
  animated = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  size?: "lg" | "sm";
  className?: string;
    /** Path under /public (e.g. "/images/hero-rwanda.jpg") or a remote URL allowed in next.config.js */
  backgroundImage?: string;
  /** Alt text for the background image. Keep empty ("") when it's purely decorative. */
  imageAlt?: string;
  /** How dark the overlay over the image is, for text legibility. */
  overlay?: "dark" | "darker" | "none";
  animated?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary text-white",
        size === "lg" ? "py-28 md:py-36" : "py-20 md:py-24",
        className
      )}
    >
    {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
              className={cn("object-cover", animated && "animate-kenburns")} 
          />
          {overlay !== "none" && (
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0",
                overlay === "darker"
                  ? "bg-primary-dark/80"
                  : "bg-gradient-to-b from-primary-dark/85 via-primary-dark/70 to-primary-dark/90"
              )}
            />
          )}
        </>
      ) :(
        <>
      {/* Decorative background: layered gradients stand in for a travel photo/video background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,75,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_40%),linear-gradient(180deg,#0B2545_0%,#071A33_100%)]"
      />
      </>
      )}
       <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 1px, transparent 14px)",
        }}
      />
      {animated && (
  <div
    aria-hidden="true"
    className="hero-plane pointer-events-none absolute bottom-6 left-0 z-10 animate-flyAcross opacity-0"
  >
    <span className="absolute right-1/2 top-1/2 h-0.5 w-40 origin-right -rotate-45 bg-gradient-to-l from-white/70 to-transparent" />
    <Plane className="relative h-10 w-10 fill-white text-white drop-shadow-lg md:h-14 md:w-14" />
  </div>
)}
      <div className="container-oriente relative">
        {eyebrow && (
          <span className="section-eyebrow text-accent-light">{eyebrow}</span>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
