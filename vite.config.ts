import { vitePlugin as remix } from "@remix-run/dev";
import { flatRoutes } from "remix-flat-routes";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      basename: "/",
      buildDirectory: "build",
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      serverBuildFile: "index.js",
      routes(defineRoutes) {
        return flatRoutes("routes", defineRoutes, {
          ignoredRouteFiles: [
            "**/.*",
            "**/*.css",
            "**/*.test.{js,ts,jsx,tsx}",
            "**/*.spec.{js,ts,jsx,tsx}",
          ],
        });
      },
    }),
    tsconfigPaths(),
  ],
});
