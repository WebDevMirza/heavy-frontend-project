import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import replace from "@rollup/plugin-replace";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.API_URL": JSON.stringify(process.env.API_URL),
      preventAssignment: true,
    }),
  ],
});
