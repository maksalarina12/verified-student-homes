// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages base path. Set DEPLOY_TARGET=gh-pages during the GH Pages build
// to apply the subpath; left empty in Lovable preview/production so the live
// preview keeps working.
const ghPagesBase = "/kosfinder-your-student-home/";
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: isGhPages ? ghPagesBase : "/",
  },
});
