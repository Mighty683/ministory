import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

let currentDir = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(currentDir, "src"),
    },
  },
  build: {
    sourcemap: true,
    minify: false,
    ssr: true,
    lib: {
      entry: "./src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      treeshake: false,
      output: {
        format: "es",
      },
    },
  },
  plugins: [dts()],
});
