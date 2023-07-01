/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  test: {
    setupFiles: ["./vitest.setup.ts"],
    environment: "jsdom",
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    deps: {
      inline: ["vitest-canvas-mock"],
    },
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
    unstubGlobals: true,
  },
});
