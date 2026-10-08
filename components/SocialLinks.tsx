import { Instagram, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

// Lucide has no TikTok or X icons, so these two are inline SVGs.
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials: { label: string; href: string; icon: (cls: string) => ReactNode }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/oriente_travels_tours",
    icon: (cls) => <Instagram className={cls} aria-hidden="true" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@oriente.travels.tours",
    icon: (cls) => <TikTokIcon className={cls} />,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/orientetravels",
    icon: (cls) => <XIcon className={cls} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oriente-travels-and-tours-029150442/",
    icon: (cls) => <Linkedin className={cls} aria-hidden="true" />,
  },
];

export default function SocialLinks({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const styles =
    variant === "dark"
      ? "border-white/20 text-white/70 hover:border-accent hover:bg-accent hover:text-primary-dark"
      : "border-primary/20 bg-primary text-white hover:border-accent hover:bg-accent hover:text-primary-dark";

  return (
    <ul className="mt-4 flex gap-3" aria-label="Oriente on social media">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Oriente on ${s.label}`}
            title={s.label}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors focus-ring ${styles}`}
          >
            {s.icon("h-4 w-4")}
          </a>
        </li>
      ))}
    </ul>
  );
}