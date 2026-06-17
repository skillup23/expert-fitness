/* eslint-env node */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Prerender from '@prerenderer/rollup-plugin'; // Или ваш текущий плагин пререндера
import os from 'node:os';

export default defineConfig({
  plugins: [
    vue(),
    Prerender({
      // Укажите ваши роуты для пререндеринга
      routes: ['/', '/group', '/privacy'],
      rendererOptions: {
        // Обязательные флаги для запуска Chromium в Docker/Linux контейнерах без графического интерфейса
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
        ],

        // Динамически определяем путь к браузеру
        executablePath:
          process.env.PUPPETEER_EXECUTABLE_PATH ||
          (os.platform() === 'linux' ? '/usr/bin/chromium-browser' : undefined),
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
