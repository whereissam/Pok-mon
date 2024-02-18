import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',
    QUOTE: '"\\""', // TODO: remove this when sheejs-style has been removed
  },
  server: {
    port: 3000,
  },
});
