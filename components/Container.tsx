import { cn } from "@/lib/utils/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("container-oriente", className)}>{children}</div>;
}
