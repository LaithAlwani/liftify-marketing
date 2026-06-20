import Link from "next/link";
import { Barbell } from "@phosphor-icons/react/dist/ssr";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Barbell weight="bold" className="size-4" />
          </span>
          Liftify
          <span className="ml-2 text-sm font-normal text-muted-foreground">
            Built for lifters.
          </span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
          <span>© 2026 Liftify</span>
        </nav>
      </div>
    </footer>
  );
}
