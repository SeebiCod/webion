import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: "dist",
      routes: [
        "/",
        "/contact",
        "/compare/wix-vs-squarespace",
        "/compare/wix-vs-wordpress",
        "/services/web-design-small-business",
        "/services/websites-for-consultants",
        "/services/websites-for-coaches",
        "/blog/how-much-does-a-website-cost-uk",
        "/blog/best-web-design-agencies-uk",
      ],
    }),
  ],
  server: {
    port: 5173
  }
});
