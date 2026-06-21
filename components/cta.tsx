import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { SIGN_UP_URL, TRIAL_DAYS } from "@/lib/site";

export function CTA() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 opacity-50"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-32 mx-auto size-[30rem] rounded-full bg-accent/30 blur-[130px]"
        />
        <h2 className="relative text-4xl font-semibold tracking-tighter sm:text-5xl">
          Stop guessing.
          <br />
          Start progressing.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Your first workout is 30 seconds away. {TRIAL_DAYS}-day free trial,
          cancel anytime.
        </p>
        <div className="relative mt-8 flex justify-center">
          <ButtonLink href={SIGN_UP_URL} external size="lg">
            Start free trial
            <ArrowRight weight="bold" className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
