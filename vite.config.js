import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // root: ".",
  base: "./DSA-FSA/",
  server: {
    port: 5173,
  },
  build: {
    outDir: "./dist",
    chunkSizeWarningLimit: 1024,
  },
  preview: {
    port: 5173,
  },
  appType: "spa"
});
