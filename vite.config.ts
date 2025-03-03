import {UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/

const viteConfig: UserConfig = {
    plugins: [
        vueJsxPlugin({}),
        vue(),
    ],
}
export default viteConfig