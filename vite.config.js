import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        refTransform: true,
        reactivityTransform: true
    })],
    base: './',
    server: {
        prot: 80,
        host: "webstack.com", //本机主机名
        https: false, //协议
        open: true, //启动服务器时自动打开浏览器访问
        proxy: {
            '/api': {
                target: "http://webstack.com/",//代理域名
                changOrigin: true, //开启代理
                ws: true,

                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
