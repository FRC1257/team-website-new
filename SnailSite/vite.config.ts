import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://github.com/vitejs/vite/discussions/12191
import * as path from "path";

// https://vitejs.dev/config/

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
