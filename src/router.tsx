import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Ini basepath gue ganti ke nama repo lu yang baru. Jangan ngadi-ngadi diganti lagi!
const isGhPages = import.meta.env.VITE_DEPLOY_TARGET === "gh-pages";
const basepath = isGhPages ? "/verified-student-homes" : undefined;

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath,
  });

  return router;
};