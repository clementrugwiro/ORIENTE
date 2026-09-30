const stats = [
  { value: "2022", label: "Established" },
  { value: "8+", label: "Core Services" },
  { value: "4", label: "Destination Regions" },
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
        </div>
      ))}
    </div>
  );
}
