import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base is set via VITE_BASE_URL env var for GitHub Pages deploys (e.g. /PLUMP/)
  base: process.env.VITE_BASE_URL || '/',
})
