# CV Portfolio V2 — Refactor audit (2026-10-08)

## Scope
Branch: `refactor/career-freelance-v2` (based on `main`).
No merge to main; no production deployment.

## Audit findings
- Positioning was split among accounting, marketing, data and web; this weakens the primary career message.
- Social links contained generic placeholder homepages.
- An Open Graph image path referenced a missing `/og-image.png`.
- Preloader blocked navigation for approximately 3 seconds.
- Motion accessibility was incomplete.
- Resume PDF CTA was rendered as an internal router link, not a real download.
- Portfolio case studies should distinguish live projects vs. demonstrations and quantify only verified results.

## Changes
- Align hero summary and rotating roles with AI Solutions Builder, Web, Webapp and Automation.
- Narrow services to three explicit, realistically scoped offerings.
- Update title, description, canonical and social metadata; reference existing `public/assets/profile.jpg`.
- Replace unverifiable portfolio count claims with qualitative labels.
- Remove social placeholder destinations.
- Shorten loading animation and add reduced motion support.
- Make CV PDF link a native download anchor.

## Verification
- GitHub compare: 7 modified existing files, branch ahead of main, main unchanged as of audit.
- Existing profile image path confirmed in `public/assets`.
- Build/typecheck NOT EXECUTED: execution environment cannot resolve github.com to clone the repository. Do not merge or deploy before CI build and manual UI regression checks.
- Verify: `npm ci && npm run build && npx tsc --noEmit`.
- Manually verify hero mobile layout, CV download, navigating to /work, navigation after returning home, keyboard navigation, reduced motion, social share preview and video fallback.

## Follow-up
- Improve mobile nav (desktop nav hidden on mobile).
- Add accurate per-project case study routes and verification tags.
- Review accessibility of loaders and hero contrast.
- Verify any production claims in experience/portfolio before displaying as facts.
