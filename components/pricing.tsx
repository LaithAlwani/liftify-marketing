import { Check } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { PRICE_MONTHLY, SIGN_UP_URL, TRIAL_DAYS } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
          One membership. Everything in.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Try every feature free for {TRIAL_DAYS} days. Keep going for{" "}
          {PRICE_MONTHLY}/month — cancel anytime.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-md">
        <div className="relative flex flex-col rounded-card border-2 border-accent-strong bg-card p-8 shadow-xl shadow-accent/10">
          <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {TRIAL_DAYS}-day free trial
          </span>

          <h3 className="text-lg font-semibold tracking-tight">Liftify Membership</h3>
          <p className="mt-2 flex items-baseline gap-1">
            <span className="text-5xl font-semibold tracking-tighter">
              {PRICE_MONTHLY}
            </span>
            <span className="text-muted-foreground">/ month</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Free for your first {TRIAL_DAYS} days.
          </p>

          <ul className="mt-7 flex flex-col gap-3 text-sm">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check
                  weight="bold"
                  className="mt-0.5 size-4 shrink-0 text-accent-strong"
                />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={SIGN_UP_URL}
            external
            size="lg"
            className="mt-8 w-full"
          >
            Start {TRIAL_DAYS}-day free trial
          </ButtonLink>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Cancel anytime during your trial and you won&apos;t be charged.
          Member-only offers unlock inside the app.
        </p>
      </div>
    </section>
  );
}

const FEATURES = [
  "Unlimited workout logging",
  "Unlimited body-journal entries",
  "Streaks & last-workout summary",
  "Weekly volume charts",
  "Strength progression trends",
  "Body-weight & measurement charts",
  "Install as a phone app (PWA)",
];
