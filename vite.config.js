import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
   css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/style.scss";
        `
      }
    }
  },
  define : {
    __VUE_PROD_DEVTOOLS__ : true
  }
})
