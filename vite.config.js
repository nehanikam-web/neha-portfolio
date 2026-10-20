import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration: lets Vite understand React (JSX).
export default defineConfig({
  plugins: [react()],
});
