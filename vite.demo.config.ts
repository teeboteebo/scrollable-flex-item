import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  base: "/scrollable-flex-item/",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});