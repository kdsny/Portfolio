import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: set BASE_PATH to /your-repo-name/ (e.g. /Resume-main/)
// For username.github.io repo, use BASE_PATH=/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
});
