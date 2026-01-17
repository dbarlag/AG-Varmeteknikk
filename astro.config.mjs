import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://agvarmeteknikk.no',
  integrations: [
    react(),
    sitemap(),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  build: {
    // Inline CSS directly into HTML to eliminate render-blocking CSS request
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      // Enable modulepreload polyfill for better module loading
      modulePreload: {
        polyfill: true,
      },
      // Optimize chunk splitting for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'motion': ['motion'],
          },
        },
      },
    },
  },
});
