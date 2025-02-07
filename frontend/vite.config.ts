import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5017,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
});
