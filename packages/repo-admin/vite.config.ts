import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// Used to generate svg sprite map
// https://github.com/vbenjs/vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// On-demand components auto importing for Vue
// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver, ArcoResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [fileURLToPath(new URL('./src/assets/svg/', import.meta.url))],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    }),
    Components({
      resolvers: [NaiveUiResolver(), ArcoResolver()],
      dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
      '@public': fileURLToPath(new URL('./public', import.meta.url))
    }
  }
})
