import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  root: "pages",
  publicDir: "../public",
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "../dist-pages",
    emptyOutDir: true,
  },
});
