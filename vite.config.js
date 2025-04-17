import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8888,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: []
}); 