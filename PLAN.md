# Liftify — Fitness Tracker Web PWA + Marketing Site

> **Mirror copy.** The canonical copy lives in the app repo (`app.liftify.com`). Keep both in
> sync on every meaningful update. **This repo is the marketing site (`liftify.com`).**

## Context

The app repo started as an Expo (React Native) monorepo with a strong Convex backend + Clerk
auth but only scaffolded UI. The decision is to **abandon the mobile app** and ship a
**simple web PWA** plus a **marketing site**, under the **Liftify** brand:

- **`liftify.com`** → marketing site (**this** Next.js 16 / React 19 / Tailwind v4 repo,
  currently the local `corevex` folder pending rename).
- **`app.liftify.com`** → the Liftify PWA (the app repo, re-platformed from Expo to Next.js).

The product is deliberately tiny: **"Track workouts fast and see progress over time."**
Bar for shippable = a new user logs their first workout in **under 30 seconds**, zero
onboarding. Monetization is a **single flat $6.99/mo Stripe subscription** (Free = logging,
Pro = charts/analytics). UI quality comes from a **shared design system** driven by the
`taste-skill` agent skill, used identically across both repos.

> ⚠️ Both repos use a **customized Next.js 16** ("NOT the Next.js you know" per `AGENTS.md`).
> Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`
> (App Router docs live under `01-app/`). Tailwind is **v4** (`@theme inline` in
> `globals.css`, no `tailwind.config.*`). Fonts are Geist / Geist Mono via `next/font/google`.
> Package manager is **npm** (app repo uses npm workspaces, packages scoped `@liftify/*`).

---

## 0. Tracked plan files
- [x] Commit this plan as **`PLAN.md` in BOTH repos**, identical on every workstation.
- [ ] Mark sections off (`- [x]`) as they are completed.

## 1. Shared design system (taste-skill)
- [x] Install `design-taste-frontend` in both repos.
- [x] **Design read:** athletic-minimal, zinc/ink neutrals + one **volt-lime** accent
      (`#a3e635`). Dials — marketing 7/6/4, app calmer.
- [x] Encode tokens in **Tailwind v4 `@theme inline`** in `app/globals.css` + a shared
      `.container-page` margin helper; identical block mirrored in both repos. *(This repo is
      the canonical source of the token block.)*
- [ ] Build a tiny shared primitive set per repo (Button, Card, Input, Modal) using the tokens.

---

## 2. App repo (`app.liftify.com`)

### 2a. Scaffold — DONE
- [x] Added `apps/web` (`@liftify/web`, Next.js 16 + Tailwind v4); builds.
- [x] Deleted `apps/mobile`; converted monorepo **pnpm → npm workspaces**.
- [x] Renamed workspace packages to `@liftify/{web,convex,shared,tsconfig}`.

### 2b. Backend — fresh 3-table schema
`users` (+ `plan`, `stripeCustomerId`) · `workouts` (embedded exercises array) ·
`bodyEntries` (journal). MVP functions: `users.getOrCreateCurrentUser`/`updateUnits`,
`workouts.create`/`listForUser`/`getLast`, `bodyEntries.create`/`listForUser`,
`exercises.list`/`seed`. Streak computed client-side. Delete unused functions.

### 2c. Auth (Clerk)
`@clerk/nextjs` + `ConvexProviderWithClerk` + `clerkMiddleware` gating `(app)`; configure
for `app.liftify.com`; first authed load mints the user row.

### 2d. Screens — 4 + upgrade
Home (Start · last workout · streak) · Log Workout (fast entry, 30-sec test) · Progress
(2 charts, Pro) · Body Progress (weight chart · add modal · measurements). Free = logging;
Pro = charts (gate on `users.plan`).

### 2e. Stripe billing — flat $6.99/mo (all in Convex)
`billing.createCheckoutSession` action · `convex/http.ts` webhook (sets `plan`) · Customer
Portal · Upgrade modal. Convex env: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`,
`STRIPE_PRICE_ID`.

### 2f. PWA + polish
`app/manifest.ts` + Serwist service worker; installable; empty/loading states; kg/lb toggle.

---

## 3. Marketing site (`liftify.com`) — THIS repo
- [ ] Landing page (shared tokens + design-taste-frontend): hero one-promise headline ·
      3 feature blurbs (fast logging · progress charts · body journal) · pricing card
      ($6.99/mo) · CTAs → `app.liftify.com/sign-up`.
- [ ] Footer + Privacy / Terms stubs (required before taking payments).

---

## 4. Deploy / infra
- [ ] Two Vercel projects: `liftify.com`/`www` → marketing (this repo); `app.liftify.com` → app.
- [ ] DNS for apex + `app` subdomain.
- [ ] Rename this marketing repo + local folder from `corevex` → `liftify` (GitHub + disk).
- [ ] App env + Convex env per 2e; register Stripe webhook at the Convex HTTP endpoint.

---

## Deferred (post-MVP / v2)
Free trial, plans/templates, cardio, achievements/quests/XP, charts beyond two, HealthKit/
Google Fit, offline-write, extra marketing pages. Also rewrite the app repo's stale
`CLAUDE.md`/`AGENTS.md`.

---

## Verification
Backend: `npm run convex:dev` (3 tables). App e2e: `npm run web` → sign in → log in < 30s →
Home → body entry → charts locked on Free. Billing: Stripe test card → webhook flips `plan`.
PWA: Lighthouse pass + install to home screen. Design parity: `globals.css` token block
identical in both repos.
