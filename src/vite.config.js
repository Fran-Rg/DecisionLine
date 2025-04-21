import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { allowedHosts: ['.local', 'ef46-86-26-100-224.ngrok-free.app'], }
})
