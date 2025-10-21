import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.lib.json",
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ScrollableFlex",
      fileName: (format) => `scrollable-flex-item.${format}.js`,
    },
    rollupOptions: {
      // Do not bundle peer deps and JSX runtime
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
        },
      },
    },
    minify: false, // Disable minification for better debugging
  },
});