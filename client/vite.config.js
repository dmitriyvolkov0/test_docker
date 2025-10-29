import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/frontend/',
  server: {
    host: '0.0.0.0', // Для доступа из Docker
    port: 5173,
  },
})
