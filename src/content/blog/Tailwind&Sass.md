# How setup Tailwind and SCSS with Nuxt 3

This guide will show you how to install and utilize Tailwindcss and Sass in your Nuxt 3 project.

## Prerequisites

Before getting started, please make sure you have scaffold up a new project as mentioned here 👉 [Nuxt3 Project](newProjectNuxt3.md) and.

### If you already have a new project, let's jump right in

### Install all the dependecies 

Type in your Terminal:

npm install -D @nuxtjs/tailwindcss postcss@latest autoprefixer@latest \
sass-loader node-sass sass.

### then... init tailwind.config

npx tailwindcss init

### update the tailwind.config.js

```javascript

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '@@/components/**/*.{js,vue,ts}',
    '@@/iayouts/**/*.vue',
    '@@/pages/**/*.vue',
    '@@/nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### update you nuxt.config.ts

```javascript

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    css: ['@@/assets/css/base.scss'], <-- "feel free to rename it"
    plugins: [
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }

})

```

### now create needed folders and files

- [x] Folders: components, assets/css, pages, layout -> (optional)

- [x] create a base.scss file in the assets/css folder

- [x] start your dev server -> npm run dev

- [x] and use scss and tailwind in your project.