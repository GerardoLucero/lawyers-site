import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lawyers-site/',  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',  // Asegura que las imágenes y otros assets se copien correctamente
  }
});