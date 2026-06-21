"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  Lightning,
  Flame,
  Check,
  ArrowRight,
  TrendUp,
} from "@phosphor-icons/react";
import { ButtonLink } from "@/components/ui/button";
import { PRICE_MONTHLY, SIGN_UP_URL, TRIAL_DAYS } from "@/lib/site";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const EXERCISES = [
  { name: "Bench Press", detail: "3 × 8 · 80 kg", top: "PR +2.5" },
  { name: "Overhead Press", detail: "3 × 10 · 45 kg", top: "—" },
  { name: "Incline Dumbbell", detail: "3 × 12 · 24 kg", top: "—" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Background grid + volt glow */}
      <div
        aria-hidden
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0 -z-10 opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 -z-10 size-[34rem] rounded-full bg-accent/25 blur-[120px]"
      />

      <div className="container-page grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div
          variants={container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "show"}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"
          >
            <Lightning weight="fill" className="size-3.5 text-accent-strong" />
            No bloat. Just lifts.
          </motion.span>

          <motion.h1
            variants={item}
            className="text-5xl font-semibold leading-[1.1] tracking-tighter sm:text-6xl lg:text-7xl"
          >
            Track workouts{" "}
            <span className="whitespace-nowrap rounded-lg bg-accent px-2 leading-none text-accent-foreground">
              fast
            </span>
            .
            <br className="hidden sm:block" /> See progress over time.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground"
          >
            Log a full workout in under 30 seconds. No nutrition spreadsheets,
            no clutter — just lift, log, and watch the numbers climb.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href={SIGN_UP_URL} external size="lg">
              Start free trial
              <ArrowRight weight="bold" className="size-4" />
            </ButtonLink>
            <ButtonLink href="#features" variant="secondary" size="lg">
              See how it works
            </ButtonLink>
          </motion.div>

          <motion.p
            variants={item}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground"
          >
            <Check weight="bold" className="size-4 text-accent-strong" />
            {TRIAL_DAYS}-day free trial
            <span className="text-border">·</span>
            then {PRICE_MONTHLY}/mo
            <span className="text-border">·</span>
            cancel anytime
          </motion.p>
        </motion.div>

        {/* Product mock */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 28, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-card border border-border bg-card p-5 shadow-2xl shadow-black/10">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Today</p>
                  <p className="text-lg font-semibold tracking-tight">
                    Push Day
                  </p>
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
                      <p className="text-sm text-muted-foreground">
                        {ex.detail}
                      </p>
                    </div>
                    <span
                      className={`font-mono text-sm tabular-nums ${
                        ex.top.startsWith("PR")
                          ? "text-accent-strong"
                          : "text-muted-foreground"
                      }`}
                    >
                      {ex.top}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  3 exercises · 9 sets
                </span>
                <span className="inline-flex h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground">
                  Finish workout
                </span>
              </div>
            </div>
          </motion.div>

          {/* Floating PR badge */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.8 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.6 }}
            className="absolute -left-4 top-16 hidden sm:block"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 shadow-xl"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
                <TrendUp weight="bold" className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-muted-foreground">New PR</p>
                <p className="text-sm font-semibold">+2.5 kg</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
