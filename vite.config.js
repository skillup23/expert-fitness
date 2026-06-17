import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import prerender from '@prerenderer/rollup-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    prerender({
      // Указываем плагину, где лежит скомпилированный проект
      staticDir: path.resolve(__dirname, 'dist'),
      // Список роутов, которые нужно отрендерить в статический HTML
      routes: ['/', '/group', '/privacy'],
      rendererOptions: {
        // Указываем путь к стабильной версии установленного Google Chrome
        executablePath:
          'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        // Отключаем песочницу (частая причина ошибки 3221225477 в Windows)
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
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
