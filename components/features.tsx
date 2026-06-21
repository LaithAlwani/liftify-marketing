import {
  Lightning,
  ChartLineUp,
  Scales,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

export function Features() {
  return (
    <section
      id="features"
      className="container-page scroll-mt-24 py-20 sm:py-28"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent-strong">
          The whole product
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tighter sm:text-5xl">
          Everything you need.
          <br />
          Nothing you don&apos;t.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Three screens, one job: get you in, logged, and back to your day —
          while quietly building the record of your progress.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {/* Large — fast logging */}
        <Card className="md:col-span-2">
          <Chip>
            <Lightning weight="bold" className="size-6" />
          </Chip>
          <Title>Log in seconds</Title>
          <Body>
            Add exercises, tap in your sets, done. The fastest log in fitness —
            with a rest timer that starts itself and your best weight
            pre-filled.
          </Body>
          <div className="mt-6 flex flex-col gap-2">
            {[
              ["Bench Press", "Set 1", "8 × 80"],
              ["Bench Press", "Set 2", "8 × 82.5"],
            ].map(([n, s, v], i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-2.5 text-sm"
              >
                <span className="font-medium">{n}</span>
                <span className="text-muted-foreground">{s}</span>
                <span className="font-mono tabular-nums">{v}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Progress */}
        <Card>
          <Chip>
            <ChartLineUp weight="bold" className="size-6" />
          </Chip>
          <Title>Watch progress climb</Title>
          <Body>
            Weekly volume and strength trends turn effort into a line that goes
            up.
          </Body>
          <div className="mt-6 flex h-16 items-end gap-1.5">
            {[35, 52, 44, 68, 60, 82, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-accent"
                style={{ height: `${h}%`, opacity: 0.35 + (i / 7) * 0.65 }}
              />
            ))}
          </div>
        </Card>

        {/* Body journal */}
        <Card>
          <Chip>
            <Scales weight="bold" className="size-6" />
          </Chip>
          <Title>A simple body journal</Title>
          <Body>
            Log weight and measurements whenever you want. No pressure — just a
            clean record.
          </Body>
        </Card>

        {/* Large — beat your best */}
        <Card className="md:col-span-2">
          <Chip>
            <TrendUp weight="bold" className="size-6" />
          </Chip>
          <Title>Beat your best</Title>
          <Body>
            Every set shows a live +/- against your all-time best for that lift,
            so you always know when you&apos;re setting a new record.
          </Body>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ["Squat", "+5"],
              ["Deadlift", "+2.5"],
              ["Bench", "−2.5"],
              ["Row", "PR"],
            ].map(([n, d], i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm"
              >
                {n}
                <span
                  className={`font-mono font-semibold ${
                    d.startsWith("−") ? "text-red-500" : "text-accent-strong"
                  }`}
                >
                  {d}
                </span>
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-card border border-border bg-card p-6 transition-colors hover:border-accent-strong/40 ${className}`}
    >
      {children}
    </div>
  );
}
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-11 items-center justify-center rounded-xl bg-accent/15 text-accent-strong">
      {children}
    </span>
  );
}
function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-5 text-lg font-semibold tracking-tight">{children}</h3>
  );
}
function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 leading-relaxed text-muted-foreground">{children}</p>
  );
}
