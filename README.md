# Compounding Goals Website

Static marketing site for Compounding Goals (Next.js App Router, static export). No backend, no database.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs a static site to `out/`.

## Deploy (GitHub Pages, custom domain)

Push to `main` — `.github/workflows/deploy.yml` builds and publishes automatically via GitHub Pages.
In the repo's **Settings → Pages**, set the source to "GitHub Actions".

## TODO before App Store submission

- [ ] Replace `public/CNAME` with the real custom domain, and point its DNS at GitHub Pages.
- [ ] Replace the `#` placeholder hrefs on the download badges in `app/page.tsx` with real App Store / Google Play listing URLs.
- [x] Replace `[CONFIRM: support email address]` in `app/privacy/page.tsx`, `app/terms/page.tsx`, and `app/support/page.tsx`.
- [x] Replace `[CONFIRM: governing state/jurisdiction]` in `app/terms/page.tsx`.
- [ ] Swap the social-proof placeholder section in `app/page.tsx` for real testimonials/reviews once available.
