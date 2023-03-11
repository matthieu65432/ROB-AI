import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        bro: './bro.html',
        supernova: './supernova.html'
      }
    }
  }
});
