import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project-personalWebsite/', // Bu satırı kendi repository adınızla güncelleyin
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});