import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  root: '.',
  base: '/',
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@config': path.resolve(__dirname, 'src/core/config'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@pages': path.resolve(__dirname, 'src/features/pages'),
      '@auth': path.resolve(__dirname, 'src/features/auth'),
      '@wallet': path.resolve(__dirname, 'src/features/wallet'),
      '@student': path.resolve(__dirname, 'src/features/student'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@src': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    outDir: 'dist'
  },
  server: {
    port: 2999
  }
});