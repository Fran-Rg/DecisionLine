import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import dsv from '@rollup/plugin-dsv'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/DecisionLine/',
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        "short_name": "DecisionLine",
        "name": "Decision Line",
        "icons": [
          {
            "src": "favicon.png",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "logo_192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "logo_512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": 'logo_512.png',
            "sizes": '512x512',
            "type": 'image/png',
            "purpose": 'any maskable',
          },
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#ffffff",
        "background_color": "#ffffff"
      },
    }),
    dsv(),
  ],
})
