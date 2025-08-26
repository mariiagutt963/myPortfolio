import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

console.log('🔧 CONFIG LOADING NOW!')

export default defineConfig({
  plugins: [react(), tailwindcss()],
 server: {
  host: true,
  allowedHosts: true
}
})

