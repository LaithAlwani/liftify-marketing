import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Liftify",
  description: "How Liftify handles your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-page flex-1 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: June 2026
          </p>

          <div className="mt-4 rounded-card border border-border bg-muted p-4 text-sm text-muted-foreground">
            ⚠️ Template placeholder — replace with your real, lawyer-reviewed
            policy before taking payments or launching publicly.
          </div>

          <div className="mt-8 flex flex-col gap-6 leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                What we collect
              </h2>
              <p className="mt-2">
                Account details (handled by our authentication provider) and the
                workout and body-journal data you choose to log. We do not sell
                your data.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                How we use it
              </h2>
              <p className="mt-2">
                To provide the service: storing your logs, showing your progress,
                and processing your subscription through our payment provider.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                Your choices
              </h2>
              <p className="mt-2">
                You can export or delete your data at any time. Contact us to
                request account deletion.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
