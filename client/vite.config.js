import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: './index.html',
        bro: './bro.html',
        supernova: './supernova.html'
      }
    }
  }
});
