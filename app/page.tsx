import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { CTA } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Reveal>
          <Stats />
        </Reveal>
        <Features />
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
