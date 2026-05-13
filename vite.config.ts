import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: ["/", "/verified-student-homes"],
    },
  },
  vite: {
    base: process.env.DEPLOY_TARGET === "gh-pages" ? "/verified-student-homes/" : "/",
  },
});
