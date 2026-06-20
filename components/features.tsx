import {
  Lightning,
  ChartLineUp,
  Scales,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export function Features() {
  return (
    <section id="features" className="container-page py-20 sm:py-28">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Three screens, one job: get you in, logged, and back to your day —
          while quietly building the record of your progress.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group rounded-card border border-border bg-card p-6 transition-colors hover:border-accent-strong/40"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-strong">
              <f.icon weight="bold" className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              {f.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURES: { icon: Icon; title: string; body: string }[] = [
  {
    icon: Lightning,
    title: "Log in seconds",
    body: "Add exercises, tap in your sets, done. The fastest log in fitness — under 30 seconds, every single time.",
  },
  {
    icon: ChartLineUp,
    title: "Watch progress climb",
    body: "Weekly volume and strength trends turn your effort into a line that goes up. Proof you're getting stronger.",
  },
  {
    icon: Scales,
    title: "A simple body journal",
    body: "Log weight and measurements whenever you want. No pressure, no nagging — just a clean record over time.",
  },
];
