const STATS = [
  { v: "< 30s", l: "to log a workout" },
  { v: "$7.99", l: "per month" },
  { v: "30 days", l: "free trial" },
  { v: "0", l: "spreadsheets" },
];

export function Stats() {
  return (
    <section className="container-page py-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className="bg-card p-6 text-center">
            <p className="text-3xl font-semibold tracking-tighter sm:text-4xl">
              {s.v}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
