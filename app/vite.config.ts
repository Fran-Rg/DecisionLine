import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
  ],
  server: {
    allowedHosts: ['de0e-130-41-187-81.ngrok-free.app'],
  }
})
