import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import htmlPlugin from 'vite-plugin-html-config'

const htmlPluginOpt = {
  metas: [
    {
      "http-equiv": "Content-Security-Policy",
      content: "upgrade-insecure-requests"
    },
  ]
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOpt)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
