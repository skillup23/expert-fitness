/* eslint-env node */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Импортируем ваш плагин пререндеринга (у вас это может быть prerender или @prerenderer/rollup-plugin)
import Prerender from '@prerenderer/rollup-plugin';

export default defineConfig({
  plugins: [
    vue(),
    Prerender({
      // Ваши маршруты для SEO
      routes: ['/', '/group', '/privacy'],

      // НАСТРОЙКИ БРАУЗЕРА ДЛЯ TIMEWEB:
      rendererOptions: {
        renderAfterDocumentEvent: 'custom-render-trigger', // если используете события, либо удалите эту строку

        // Передаем правильные аргументы для Linux-сервера
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
        ],

        // Автоматически определяем путь: если сборка идет на сервере (Linux),
        // плагин сам найдет системный chromium. Если на Windows — указывать ничего не нужно.
        executablePath:
          process.platform === 'linux'
            ? '/usr/bin/chromium-browser'
            : undefined,
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
