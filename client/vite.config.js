import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './client/index.html',
        bro: './client/bro.html',
        supernova: './client/supernova.html'
      }
    }
  }
});
