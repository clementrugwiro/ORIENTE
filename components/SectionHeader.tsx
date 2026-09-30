import { cn } from "@/lib/utils/cn";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span
          className={cn(
            "section-eyebrow",
            light && "text-accent-light"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={cn("section-title", light && "text-white")}>{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle",
            align === "center" && "mx-auto",
            light && "text-white/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
