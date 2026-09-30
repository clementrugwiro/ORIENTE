import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "outline" | "secondary";

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  type,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const styles = cn(
    variant === "primary" && "btn-primary",
    variant === "outline" && "btn-outline",
    variant === "secondary" && "btn-secondary",
    "focus-ring",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
