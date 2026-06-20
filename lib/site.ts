// Central place for the cross-link to the app and headline pricing. The marketing
// site has no backend — every CTA hands the user to the app's Clerk sign-up.
export const APP_URL = "https://app.liftify.com";
export const SIGN_UP_URL = `${APP_URL}/sign-up`;
export const SIGN_IN_URL = `${APP_URL}/sign-in`;

export const PRICE_MONTHLY = "$6.99";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
] as const;
