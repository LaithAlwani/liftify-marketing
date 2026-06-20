import Link from "next/link";
import { Barbell } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { NAV_LINKS, SIGN_IN_URL, SIGN_UP_URL } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Barbell weight="bold" className="size-5" />
          </span>
          Liftify
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SIGN_IN_URL}
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign in
          </a>
          <ButtonLink href={SIGN_UP_URL} external size="md">
            Start free
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
