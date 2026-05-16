import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/music/",

  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["appLogo.png"],
      manifest: {
        name: "Music",
        short_name: "Music",
        description: "Offline music player",
        theme_color: "#09090b",
        background_color: "#09090b",
        display: "standalone",
        scope: "/music/",
        start_url: "/music/",
        icons: [
          {
            src: "/appLogo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/appLogo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/appLogo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
