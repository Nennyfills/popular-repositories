import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 3004,
    fs: {
      strict: true,
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
