import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  envDir:
    process.env.NODE_ENV === "production"
      ? "../.env.production"
      : "../.env.local",
  server: {
    proxy: {
      "/api": {
        target:
          process.env.NODE_ENV === "production"
            ? "production domain"
            : "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
