# How setup Tailwind and SCSS with Nuxt 3

This guide will show you how to install and utilize Tailwind CSS and Sass in your Nuxt 3 project.

## PREREQUISITES

Before getting started, please make sure you have set up a new project as mentioned here 👉 [Nuxt3 Project](newProjectNuxt3.md).

### If you already have a new project, let's jump right in

### Install all the dependecies 

Install all the dependencies by typing the following commands in your terminal:

```

npm install -D @nuxtjs/tailwindcss postcss@latest autoprefixer@latest
sass-loader node-sass sass.

```

### Then, initialize the tailwind.config file by running the command:

npx tailwindcss init

### Update the tailwind.config.js file with the following content:

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
    modules: ['@nuxtjs/tailwindcss'],
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

### Now, create the necessary folders and files:

- [x] Folders: components, assets/css, pages, layout -> (optional)

- [x] create a base.scss file in the assets/css folder

- [x] start your dev server ->

``` 

npm run dev 

```

### ... and use SCSS and Tailwind in your project.

