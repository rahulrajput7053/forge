// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/forge/",   // 👈 IMPORTANT: repo name
  plugins: [react()],
});
