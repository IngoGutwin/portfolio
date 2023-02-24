
// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
    srcDir: 'src',
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ['@@/src/assets/css/base.scss'],
    plugins: [
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            'postcss-nested': {}
        }
    }
})
