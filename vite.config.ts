import { cwd } from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { validateEnv } from './config';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig(({ mode }) => {
  validateEnv(loadEnv(mode, cwd(), 'WELTENBUMMLERPAAR_FRONTEND_'));

  return {
    envPrefix: ['VITE_', 'WELTENBUMMLERPAAR_FRONTEND_'],
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
