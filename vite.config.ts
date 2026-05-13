import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false, // INI KUNCINYA JIR! MATIIN SSR BIAR BIKIN INDEX.HTML!
    prerender: {
      routes: ["/"],
    },
  },
  vite: {
    // Basepath HARUS tetep ke nama repo lu
    base: process.env.DEPLOY_TARGET === "gh-pages" ? "/verified-student-homes/" : "/",
  },
});
