import { Barbell } from "@phosphor-icons/react/dist/ssr";

const ITEMS = [
  "Bench Press",
  "Back Squat",
  "Deadlift",
  "Overhead Press",
  "Barbell Row",
  "Pull Up",
  "Hip Thrust",
  "Romanian Deadlift",
  "Incline Press",
  "Lunge",
];

export function Marquee() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pr-10">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-lg font-semibold text-muted-foreground"
          >
            <Barbell weight="fill" className="size-4 text-accent-strong" />
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}
