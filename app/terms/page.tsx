import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service — Liftify",
  description: "The terms for using Liftify.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: June 2026
          </p>

          <div className="mt-4 rounded-card border border-border bg-muted p-4 text-sm text-muted-foreground">
            ⚠️ Template placeholder — replace with your real, lawyer-reviewed
            terms before taking payments or launching publicly.
          </div>

          <div className="mt-8 flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Using Liftify
              </h2>
              <p className="mt-2">
                Liftify helps you log workouts and track progress. You&apos;re
                responsible for the accuracy of the data you enter and for using
                the app in line with applicable laws.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Subscriptions
              </h2>
              <p className="mt-2">
                Pro is billed monthly at $6.99 and renews until cancelled. You can
                cancel anytime from your account; access continues until the end
                of the billing period.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                No medical advice
              </h2>
              <p className="mt-2">
                Liftify is a tracking tool, not a medical or fitness-advice
                service. Train responsibly.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
