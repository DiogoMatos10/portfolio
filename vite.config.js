import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: '_redirects', dest: '.' },
        { src: 'public/images/favicon/site.webmanifest', dest: 'images/favicon' }
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js', 
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
  base: '/',
});
