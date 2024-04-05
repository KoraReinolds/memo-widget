import { fileURLToPath, URL } from 'node:url'
import VueDevTools from 'vite-plugin-vue-devtools'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3001,
  },
  build: {
    minify: false,
    lib: {
      entry: './src/main.ts',
      formats: ['es'], // pure ESM package
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
    target: 'esnext', // transpile as little as possible
  },
})
