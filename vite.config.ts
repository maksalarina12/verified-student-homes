import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: ["/"],
    },
  },
  vite: {
    base: process.env.DEPLOY_TARGET === "gh-pages" ? "/verified-student-homes/" : "/",
    // OUTDIR DIHAPUS BIAR TANSTACK START BIKIN FOLDER DIST/CLIENT SECARA OTOMATIS
  },
});