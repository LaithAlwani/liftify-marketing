import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.webp" alt="" className="size-7 rounded-lg" />
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
