import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true,
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]-[local]-[hash:base64:4]',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (
            id.includes('react-router-dom') ||
            id.includes('react-icons') ||
            id.includes('formik')
          ) {
            return '@react-tools';
          }
          if (id.includes('@mui/icons-material')) {
            return '@mui/icons-material';
          }
          if (id.includes('@mui/material')) {
            return '@mui/material';
          }
          if (id.includes('@mui/x-date-pickers')) {
            return '@mui/x-date-pickers';
          }
          if (id.includes('axios')) {
            return '@axios';
          }
          if (id.includes('mobx')) {
            return '@mobx';
          }
        },
      },
    },
  },
  server: {
    port: 3010,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
});
