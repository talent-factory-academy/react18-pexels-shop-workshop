import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react18-pexels-shop-workshop/',
  plugins: [react()]
})
