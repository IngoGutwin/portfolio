
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "src",
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ["@@/src/assets/css/base.scss"],
    plugins: [
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
