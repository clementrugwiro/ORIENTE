import { CheckCircle2 } from "lucide-react";
import { ValueItem } from "@/types";

export default function ValueCard({ value }: { value: ValueItem }) {
  return (
    <div className="card flex gap-4">
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-dark" aria-hidden="true" />
      <div>
        <h3 className="font-display text-base font-semibold text-primary">
          {value.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {value.description}
        </p>
      </div>
    </div>
  );
}
