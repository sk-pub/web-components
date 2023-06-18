import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./lib', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: fs.readdirSync(resolve(__dirname, 'lib/components'))
        .filter(f => f.endsWith('.ts'))
        .map(f => resolve(__dirname, 'lib/components', f)),
      name: 'VueComponents',
      // the proper extensions will be added
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'umd.js'}`,
    },
    // If Vue is externalized, then it has to be loaded by the host (see index.html)
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['vue'],
    //   output: {
    //     // Provide global variables to use in the UMD build
    //     // for externalized deps
    //     globals: {
    //       vue: 'Vue',
    //     },
    //   },
    // },
  },
  define: {
    "process.env": {},
  }
})
