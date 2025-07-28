import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Remove vite-plugin-gh-pages - we'll use a different method
// import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: "Gifts", // MUST match your repository name exactly
  plugins: [
    react(),
    // componentTagger() - disable for now to isolate issues
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});