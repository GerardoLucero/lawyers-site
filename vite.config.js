import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [react()],
  base: '/lawyers-site/' // ✅ Ajusta esto con el nombre de tu repositorio
})