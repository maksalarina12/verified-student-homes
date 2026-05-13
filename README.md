# KosFinder — Your Student Home

Marketplace kos mahasiswa untuk wilayah Banda Aceh & Syiah Kuala. Fokus pada
**transparansi harga** dan **verifikasi data manual** untuk mencegah penipuan.

Stack: **React 19 + TanStack Start + Vite 7 + Tailwind CSS v4 + Bun**.

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

The build output is written to `dist/client` (static client assets) and
`dist/server` (SSR bundle).

---

## Deploy to GitHub Pages

This project is pre-configured to deploy to GitHub Pages at the path
`/kosfinder-your-student-home/`.

### 1. Repository setup

1. Push the project to a GitHub repository named **`kosfinder-your-student-home`**.
2. In your repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.

### 2. How the base path works

The GH Pages subpath is only applied during the GitHub Actions build, so the
Lovable live preview is not affected:

- `vite.config.ts` reads `process.env.DEPLOY_TARGET` and sets
  `base = "/kosfinder-your-student-home/"` when it equals `gh-pages`.
- `src/router.tsx` reads `import.meta.env.VITE_DEPLOY_TARGET` and sets the
  TanStack Router `basepath` to match.

Both env vars are injected by the workflow below.

### 3. GitHub Actions workflow

The workflow is committed at `.github/workflows/static.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      DEPLOY_TARGET: gh-pages
      VITE_DEPLOY_TARGET: gh-pages
    steps:
      - uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Build
        run: bun run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/client

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Important notes

- **No `404.html` SPA redirect trick** is used. The TanStack Router `basepath`
  config handles routing on the subpath cleanly.
- **No URL restoration scripts** are injected into `__root.tsx`. Avoid adding
  them — they cause infinite redirect loops on GitHub Pages.
- TanStack Start’s default build is full-stack (SSR). On GitHub Pages we serve
  the static client output from `dist/client`. Server-only features (server
  functions, API routes) won’t run on GH Pages — host on Cloudflare/Vercel for
  SSR.

### 5. Custom domain (optional)

Add a `public/CNAME` file containing your domain (e.g. `kosfinder.id`) and
configure DNS in your domain registrar.
