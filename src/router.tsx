import { createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    // Preload and scroll restoration removed — they were causing
    // main-thread blocking on input focus events (router was interpreting
    // focus as "intent" to navigate, triggering preloads that blocked typing).
    defaultNotFoundComponent: () => <p>Not found</p>,
  });
}
