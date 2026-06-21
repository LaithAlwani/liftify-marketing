import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
