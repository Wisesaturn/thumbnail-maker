import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $styles: path.resolve(__dirname, 'src/styles'),
      $components: path.resolve(__dirname, 'src/components'),
      $libs: path.resolve(__dirname, 'src/libs'),
      $hooks: path.resolve(__dirname, 'src/hooks'),
      $contexts: path.resolve(__dirname, 'src/contexts'),
      $constants: path.resolve(__dirname, 'src/constants'),
    },
  },
});
