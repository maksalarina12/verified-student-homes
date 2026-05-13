import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: ["/"],
    },
  },
  vite: {
    // Basepath ini HARUS sama persis kayak nama repo lu
    base: process.env.DEPLOY_TARGET === "gh-pages" ? "/verified-student-homes/" : "/",
    build: {
      outDir: "dist",
    },
  },
});