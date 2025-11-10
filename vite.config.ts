import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: {
    port: 7000
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
