import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import  ghPages  from "vite-plugin-gh-pages";
import { componentTagger } from "lovable-tagger";

/// <reference types="vitest" />
/// <reference types="vite/client" />

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/your-repo-name/", // replace with your GitHub repo name
}));