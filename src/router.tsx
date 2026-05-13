import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Match the GitHub Pages base path. Only applied when building for GH Pages
// (DEPLOY_TARGET=gh-pages). Vite inlines import.meta.env at build time.
const isGhPages = import.meta.env.VITE_DEPLOY_TARGET === "gh-pages";
const basepath = isGhPages ? "/kosfinder-your-student-home" : undefined;

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
