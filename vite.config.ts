import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VALUE__: `"${process.env.API_URL}"`,
  },
  plugins: [react()],
});
