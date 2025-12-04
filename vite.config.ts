import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  // This must match your GitHub repo name
  base: '/store/',
  build: {
    // Output built files into docs/ so GitHub Pages can serve them
    outDir: 'docs',
  },
});
