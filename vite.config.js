import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": Object.entries(process.env).reduce((o, [k, v]) => {
      o[k] = JSON.stringify(v);
      return o;
    }, {}),
  },
});
