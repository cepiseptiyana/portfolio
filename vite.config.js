import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // jangan sertakan nama repo jika custom domain
  // base: "/portfolio/",

  // custom dns domain github pages
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // untuk src
      "@assets": path.resolve(__dirname, "./src/assets"), // khusus assets
    },
  },
});
