const stats: { value: string; label: string; detail?: string }[] = [
  { value: "2022", label: "Established" },
  { value: "8+", label: "Core Services" },
  {
    value: "6",
    label: "Destination Regions",
    detail: "Rwanda • Dubai • Africa • Europe • USA • China",
  },
  { value: "1", label: "Trusted Point of Contact" },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-card">
          <div className="font-display text-3xl font-semibold text-primary">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-muted">{stat.label}</div>
          {stat.detail && (
            <div className="mt-2 text-[11px] leading-snug text-muted/80">{stat.detail}</div>
          )}
        </div>
      ))}
    </div>
  );
}
