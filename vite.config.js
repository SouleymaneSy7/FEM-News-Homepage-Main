import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/",
    port: 3000,
    strictPort: false,
  },
  clearScreen: false,
});
