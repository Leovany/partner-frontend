import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Vant4
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      // Vant4
      Components({
          resolvers: [VantResolver()],
      }),
  ],
})

