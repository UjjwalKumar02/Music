import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/Music/",

  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["appLogo.png"],
      manifest: {
        name: "Music",
        short_name: "Music",
        description: "Offline Music player",
        theme_color: "#09090b",
        background_color: "#09090b",
        display: "standalone",
        scope: "/Music/",
        start_url: "/Music/",
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
