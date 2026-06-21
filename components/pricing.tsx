"use client";

import { useEffect, useState } from "react";
import { Check, Crown, Lightning } from "@phosphor-icons/react";
import { ButtonLink } from "@/components/ui/button";
import { SIGN_UP_URL, TRIAL_DAYS } from "@/lib/site";

type Interval = "monthly" | "yearly";
type Founder = { claimed: number; target: number; available: boolean };

const FEATURES = [
  "Unlimited workout logging",
  "Unlimited body-journal entries",
  "Weekly volume & strength charts",
  "Body-weight & measurement trends",
  "Installs like an app (PWA)",
];

export function Pricing() {
  const [interval, setInterval] = useState<Interval>("yearly");
  const [founder, setFounder] = useState<Founder | null>(null);

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_CONVEX_SITE_URL;
    if (!base) return;
    let active = true;
    fetch(`${base}/founder`)
      .then((r) => r.json())
      .then((d: Founder) => active && setFounder(d))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // Optimistic: assume founder spots available until we hear otherwise.
  const founderYearly = interval === "yearly" && (founder?.available ?? true);
  const price =
    interval === "monthly" ? "$9.99" : founderYearly ? "$29.99" : "$99.99";
  const suffix = interval === "monthly" ? "/mo" : "/yr";
  const pct = founder ? Math.round((founder.claimed / founder.target) * 100) : 0;
  const spotsLeft = founder ? Math.max(0, founder.target - founder.claimed) : null;

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[130px]"
      />

      <div className="container-page mx-auto max-w-2xl text-center">
        {founderYearly && (
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-strong/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-strong">
            <Lightning weight="fill" className="size-3.5" />
            Limited — founder pricing for the first {founder?.target ?? 100}
          </span>
        )}
        <h2 className="mt-4 text-3xl font-semibold tracking-tighter sm:text-5xl">
          Lock in {founderYearly ? "75% off" : "your price"}.
          <br />
          Forever.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Try everything free for {TRIAL_DAYS} days. The first founders keep{" "}
          <span className="font-medium text-foreground">$29.99/year for life</span>
          .
        </p>
      </div>

      <div className="container-page mx-auto mt-10 max-w-md px-5 sm:px-0">
        {/* Interval toggle */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-full border border-border bg-card p-1">
            {(["monthly", "yearly"] as const).map((iv) => (
              <button
                key={iv}
                onClick={() => setInterval(iv)}
                className={`rounded-full px-5 py-1.5 text-sm font-medium capitalize transition-colors ${
                  interval === iv
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {iv}
                {iv === "yearly" && (
                  <span className="ml-1.5 text-xs opacity-80">2 mo free</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col rounded-card border-2 border-accent-strong bg-card p-8 shadow-xl shadow-accent/10">
          {founderYearly && (
            <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <Crown weight="fill" className="size-3.5" />
              Founder — locked in for life
            </span>
          )}

          <h3 className="text-lg font-semibold tracking-tight">
            Liftify Membership
          </h3>

          <p className="mt-2 flex items-baseline gap-2">
            <span className="text-5xl font-semibold tracking-tighter">
              {price}
            </span>
            <span className="text-muted-foreground">{suffix}</span>
            {founderYearly && (
              <span className="text-lg text-muted-foreground line-through">
                $99.99
              </span>
            )}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {interval === "yearly"
              ? "Billed yearly — 2 months free."
              : "Billed monthly."}{" "}
            {TRIAL_DAYS}-day free trial.
          </p>

          {/* Founder counter */}
          {founderYearly && founder && (
            <div className="mt-5 rounded-xl border border-accent-strong/30 bg-accent/5 p-4">
              <div className="flex items-center justify-between text-sm font-medium">
                <span>Founder spots claimed</span>
                <span className="tabular-nums">
                  {founder.claimed}
                  <span className="text-muted-foreground">
                    {" "}
                    / {founder.target}
                  </span>
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-500"
                  style={{ width: `${Math.max(pct, 3)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {spotsLeft === 0
                  ? "All founder spots are claimed."
                  : `Only ${spotsLeft} left — then it's $99.99/yr.`}
              </p>
            </div>
          )}

          <ul className="mt-6 flex flex-col gap-3 text-sm">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Check
                  weight="bold"
                  className="mt-0.5 size-4 shrink-0 text-accent-strong"
                />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <ButtonLink
            href={SIGN_UP_URL}
            external
            size="lg"
            className="mt-8 w-full"
          >
            {founderYearly ? "Claim your founder spot" : "Start free trial"}
          </ButtonLink>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Cancel anytime during your trial and you won&apos;t be charged.
        </p>
      </div>
    </section>
  );
}
