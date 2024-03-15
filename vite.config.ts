import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader';
import vueSetupExtend from 'vite-plugin-vue-setup-extend' // 设置neme属性
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        vueSetupExtend(),
        dts({
            insertTypesEntry: true,
            cleanVueFileName: true,
            include: ['packages/**/*']
        }),
        svgLoader(/* options */)
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~': path.resolve(__dirname, './packages')
        }
    },
    build: {
        outDir: 'lib',
        lib: {
            entry: path.resolve(__dirname, 'packages/index.ts'),
            name: 'chatui',
            // 输出格式
            // formats: ['es'],
            fileName: 'chatui',
            // fileName: (format) => `chatui.${format}.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 为 UMD 构建提供全局变量名称
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
