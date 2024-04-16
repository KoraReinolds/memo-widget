// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import VueDevTools from "file:///C:/Users/reino/Desktop/memo-widget/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import vue from "file:///C:/Users/reino/Desktop/memo-widget/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/reino/Desktop/memo-widget/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/reino/Desktop/memo-widget/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/reino/Desktop/memo-widget/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), dts(), VueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  server: {
    port: 3001
  },
  build: {
    minify: false,
    lib: {
      entry: "./src/main.ts",
      formats: ["es"]
      // pure ESM package
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      }
    },
    target: "esnext"
    // transpile as little as possible
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZWlub1xcXFxEZXNrdG9wXFxcXG1lbW8td2lkZ2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZWlub1xcXFxEZXNrdG9wXFxcXG1lbW8td2lkZ2V0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9yZWluby9EZXNrdG9wL21lbW8td2lkZ2V0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKSwgZHRzKCksIFZ1ZURldlRvb2xzKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDEsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnLi9zcmMvbWFpbi50cycsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sIC8vIHB1cmUgRVNNIHBhY2thZ2VcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XG4gICAgICBleHRlcm5hbDogWyd2dWUnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBQcm92aWRlIGdsb2JhbCB2YXJpYWJsZXMgdG8gdXNlIGluIHRoZSBVTUQgYnVpbGRcbiAgICAgICAgLy8gZm9yIGV4dGVybmFsaXplZCBkZXBzXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICB2dWU6ICdWdWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHRhcmdldDogJ2VzbmV4dCcsIC8vIHRyYW5zcGlsZSBhcyBsaXR0bGUgYXMgcG9zc2libGVcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtTLFNBQVMsZUFBZSxXQUFXO0FBQ3JVLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKcUssSUFBTSwyQ0FBMkM7QUFNdE8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQUEsRUFDckMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsSUFBSTtBQUFBO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBO0FBQUEsTUFHYixVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQTtBQUFBO0FBQUEsUUFHTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
