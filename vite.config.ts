/// <reference types="vitest" />

import { cwd } from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { validateEnv } from './config/validateEnv';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig(({ mode }) => {
  const envDir = cwd();
  const envPrefix = 'WELTENBUMMLERPAAR_FRONTEND_';
  validateEnv(loadEnv(mode, envDir, envPrefix));
  return {
    envDir,
    envPrefix,
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    test: {
      include: ['**/*.spec.{js,ts,jsx,tsx}'],
    },
  };
});
