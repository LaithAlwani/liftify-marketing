import { Check } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { PRICE_MONTHLY, SIGN_UP_URL } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
          One simple price
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Logging is free, forever. Upgrade only when you want the charts.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
        {/* Free */}
        <div className="flex flex-col rounded-card border border-border bg-card p-7">
          <h3 className="text-lg font-semibold tracking-tight">Free</h3>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tighter">$0</span>
            <span className="text-muted-foreground">forever</span>
          </p>
          <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
            {FREE.map((item) => (
              <Feature key={item}>{item}</Feature>
            ))}
          </ul>
          <ButtonLink
            href={SIGN_UP_URL}
            external
            variant="secondary"
            size="lg"
            className="mt-7 w-full"
          >
            Start free
          </ButtonLink>
        </div>

        {/* Pro */}
        <div className="relative flex flex-col rounded-card border-2 border-accent-strong bg-card p-7 shadow-xl shadow-accent/10">
          <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            Most popular
          </span>
          <h3 className="text-lg font-semibold tracking-tight">Pro</h3>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tighter">
              {PRICE_MONTHLY}
            </span>
            <span className="text-muted-foreground">/ month</span>
          </p>
          <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
            {PRO.map((item) => (
              <Feature key={item}>{item}</Feature>
            ))}
          </ul>
          <ButtonLink
            href={SIGN_UP_URL}
            external
            size="lg"
            className="mt-7 w-full"
          >
            Go Pro
          </ButtonLink>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Cancel anytime. No card required to start.
      </p>
    </section>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <Check
        weight="bold"
        className="mt-0.5 size-4 shrink-0 text-accent-strong"
      />
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}

const FREE = [
  "Unlimited workout logging",
  "Unlimited body-journal entries",
  "Streaks & last-workout summary",
  "Install as a phone app (PWA)",
];

const PRO = [
  "Everything in Free",
  "Weekly volume charts",
  "Strength progression trends",
  "Body-weight & measurement charts",
];
