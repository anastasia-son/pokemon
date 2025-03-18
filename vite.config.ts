import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    assetsInlineLimit: 0,
  },
  server: {
    proxy: {
      '/graphql': {
        target: 'https://beta.pokeapi.co/graphql/v1beta',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/graphql/, ''),
        secure: false,
      },
    },
  },
});
