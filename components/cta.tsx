import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { SIGN_UP_URL } from "@/lib/site";

export function CTA() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="animate-gradient-pan relative overflow-hidden rounded-[2rem] bg-linear-to-br from-violet-600 via-violet-700 to-fuchsia-600 px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="bg-grid pointer-events-none absolute inset-0 opacity-20"
        />
        <h2 className="relative text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
          Stop guessing.
          <br />
          Start progressing.
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-lg text-white/85">
          Your first workout is 30 seconds away. Free forever — no card required.
        </p>
        <div className="relative mt-8 flex justify-center">
          <a
            href={SIGN_UP_URL}
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-violet-700 shadow-lg shadow-black/20 transition-transform hover:scale-[1.03] active:translate-y-px"
          >
            Get started free
            <ArrowRight weight="bold" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
