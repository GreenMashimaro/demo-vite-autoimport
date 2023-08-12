import { defineConfig } from 'vite'
import { fileURLToPath } from "node:url";
import path from "node:path";

import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: path.join(__dirname, 'src/autoComponents')
    }),
  ],
})