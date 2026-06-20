import {
  Lightning,
  Flame,
  Check,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { PRICE_MONTHLY, SIGN_UP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Copy */}
      <div className="flex flex-col items-start gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <Lightning weight="fill" className="size-3.5 text-accent-strong" />
          No bloat. Just lifts.
        </span>

        <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl">
          Track workouts{" "}
          <span className="rounded-md bg-accent px-2 text-accent-foreground">
            fast
          </span>
          . See progress over time.
        </h1>

        <p className="max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
          Log a full workout in under 30 seconds. No nutrition spreadsheets, no
          clutter — just lift, log, and watch the numbers climb.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={SIGN_UP_URL} external size="lg">
            Start free
            <ArrowRight weight="bold" className="size-4" />
          </ButtonLink>
          <ButtonLink href="#features" variant="secondary" size="lg">
            See how it works
          </ButtonLink>
        </div>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check weight="bold" className="size-4 text-accent-strong" />
          Free forever for logging · Pro is {PRICE_MONTHLY}/mo
        </p>
      </div>

      {/* Product mock — a "Today" workout-log card */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/20 blur-2xl"
        />
        <div className="rounded-card border border-border bg-card p-5 shadow-xl shadow-black/5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Today</p>
              <p className="text-lg font-semibold tracking-tight">Push Day</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium">
              <Flame weight="fill" className="size-4 text-accent-strong" />
              12 day streak
            </span>
          </div>

          <ul className="flex flex-col gap-2">
            {EXERCISES.map((ex) => (
              <li
                key={ex.name}
                className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
              >
                <div>
                  <p className="font-medium">{ex.name}</p>
                  <p className="text-sm text-muted-foreground">{ex.detail}</p>
                </div>
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {ex.top}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">3 exercises · 9 sets</span>
            <span className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground">
              Finish workout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const EXERCISES = [
  { name: "Bench Press", detail: "3 × 8 · 80 kg", top: "PR +2.5" },
  { name: "Overhead Press", detail: "3 × 10 · 45 kg", top: "—" },
  { name: "Incline Dumbbell", detail: "3 × 12 · 24 kg", top: "—" },
];
