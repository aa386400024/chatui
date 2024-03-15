// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/my-porject/front/chat-ui/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.26_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/my-porject/front/chat-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/my-porject/front/chat-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueSetupExtend from "file:///D:/my-porject/front/chat-ui/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.1.6/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import dts from "file:///D:/my-porject/front/chat-ui/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.26_typescript@5.3.3_vite@5.1.6/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\my-porject\\front\\chat-ui";
var __vite_injected_original_import_meta_url = "file:///D:/my-porject/front/chat-ui/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    dts({
      insertTypesEntry: true,
      cleanVueFileName: true,
      include: ["packages/**/*"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "~": path.resolve(__vite_injected_original_dirname, "./packages")
    }
  },
  build: {
    outDir: "lib",
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "packages/index.ts"),
      name: "chatui",
      // 输出格式
      // formats: ['es'],
      fileName: "chatui"
      // fileName: (format) => `chatui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 为 UMD 构建提供全局变量名称
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxteS1wb3JqZWN0XFxcXGZyb250XFxcXGNoYXQtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXG15LXBvcmplY3RcXFxcZnJvbnRcXFxcY2hhdC11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovbXktcG9yamVjdC9mcm9udC9jaGF0LXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJyAvLyBcdThCQkVcdTdGNkVuZW1lXHU1QzVFXHU2MDI3XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgdnVlKCksXG4gICAgICAgIHZ1ZUpzeCgpLFxuICAgICAgICB2dWVTZXR1cEV4dGVuZCgpLFxuICAgICAgICBkdHMoe1xuICAgICAgICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcbiAgICAgICAgICAgIGNsZWFuVnVlRmlsZU5hbWU6IHRydWUsXG4gICAgICAgICAgICBpbmNsdWRlOiBbJ3BhY2thZ2VzLyoqLyonXVxuICAgICAgICB9KVxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgICAnfic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3BhY2thZ2VzJylcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgb3V0RGlyOiAnbGliJyxcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3BhY2thZ2VzL2luZGV4LnRzJyksXG4gICAgICAgICAgICBuYW1lOiAnY2hhdHVpJyxcbiAgICAgICAgICAgIC8vIFx1OEY5M1x1NTFGQVx1NjgzQ1x1NUYwRlxuICAgICAgICAgICAgLy8gZm9ybWF0czogWydlcyddLFxuICAgICAgICAgICAgZmlsZU5hbWU6ICdjaGF0dWknLFxuICAgICAgICAgICAgLy8gZmlsZU5hbWU6IChmb3JtYXQpID0+IGBjaGF0dWkuJHtmb3JtYXR9LmpzYFxuICAgICAgICB9LFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICAvLyBcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTU5MDRcdTc0MDZcdTkwQTNcdTRFOUJcdTRGNjBcdTRFMERcdTYwRjNcdTYyNTNcdTUzMDVcdThGREJcdTVFOTNcdTc2ODRcdTRGOURcdThENTZcbiAgICAgICAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgLy8gXHU0RTNBIFVNRCBcdTY3ODRcdTVFRkFcdTYzRDBcdTRGOUJcdTUxNjhcdTVDNDBcdTUzRDhcdTkxQ0ZcdTU0MERcdTc5RjBcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUSxTQUFTLGVBQWUsV0FBVztBQUU5UyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFQakIsSUFBTSxtQ0FBbUM7QUFBNEgsSUFBTSwyQ0FBMkM7QUFVdE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsSUFBSTtBQUFBLE1BQ0Esa0JBQWtCO0FBQUEsTUFDbEIsa0JBQWtCO0FBQUEsTUFDbEIsU0FBUyxDQUFDLGVBQWU7QUFBQSxJQUM3QixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsSUFDN0M7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxNQUNsRCxNQUFNO0FBQUE7QUFBQTtBQUFBLE1BR04sVUFBVTtBQUFBO0FBQUEsSUFFZDtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFFWCxVQUFVLENBQUMsS0FBSztBQUFBLE1BQ2hCLFFBQVE7QUFBQTtBQUFBLFFBRUosU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFFBQ1Q7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
