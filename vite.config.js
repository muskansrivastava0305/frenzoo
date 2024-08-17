import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  },
  base: '/',
  server:{
    port:5173,
    // get rid of the CORS error
    proxy:{
      "/api":{
        target:"https://frenzoo.qrdine-in.com",
        changeOrigin:true,
        secure:true
      }
    }
  }
})
