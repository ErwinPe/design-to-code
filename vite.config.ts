import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/design-to-code",
  plugins: [vue()],
  server: {
    port: 3000,
  },
  define: {
    "import.meta.env.VITE_BUILD_DATE": JSON.stringify(new Date().toISOString()),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html') // Entry point for the build
    }
  }
});
