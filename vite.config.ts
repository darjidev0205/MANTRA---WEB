import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({

  // ... your other configurations (like plugins)
  
  server: {
    allowedHosts: [
      'lyndsey-unintermitting-isadora.ngrok-free.dev'
    ]
  },
   plugins: [
    react(),
    
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

