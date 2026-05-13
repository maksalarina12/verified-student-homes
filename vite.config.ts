import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      routes: ["/"],
    },
  },
  vite: {
    // Kalo di Vercel, base-nya harus root!
    base: "/",
  },
});