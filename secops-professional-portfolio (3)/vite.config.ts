
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // A propriedade base: './' é CRUCIAL para o GitHub Pages.
  // Ela garante que o site procure os arquivos CSS e JS a partir
  // da pasta atual, e não da raiz do domínio.
  base: './', 
  build: {
    outDir: 'dist',
  }
});
