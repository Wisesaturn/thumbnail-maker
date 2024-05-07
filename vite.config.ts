import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $styles: path.resolve(__dirname, 'src/styles'),
      $components: path.resolve(__dirname, 'src/components'),
      $libs: path.resolve(__dirname, 'src/libs'),
    },
  },
});