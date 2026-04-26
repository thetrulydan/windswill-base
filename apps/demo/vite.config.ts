import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@windswill/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@windswill/ui/components': path.resolve(__dirname, '../../packages/ui/src/components'),
      '@windswill/core': path.resolve(__dirname, '../../packages/core/src'),
    },
  },
  server: {
    port: 5174,
  },
});