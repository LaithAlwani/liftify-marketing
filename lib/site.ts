// Central place for the cross-link to the app and headline pricing. The marketing
// site has no backend — every CTA hands the user to the app's Clerk sign-up.
// Defaults to production; override with NEXT_PUBLIC_APP_URL in dev to point the
// CTAs at your local app (e.g. http://app.localhost:3001).
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.liftify.com";
export const SIGN_UP_URL = `${APP_URL}/sign-up`;
export const SIGN_IN_URL = `${APP_URL}/sign-in`;

// Liftify is 100% free.

// Root-relative so they work from any page (e.g. /privacy): navigate home, then
// scroll to the section.
export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
] as const;
