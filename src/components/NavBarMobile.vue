<template>
    <nav class="nav-mobile">
        <NuxtLink to="/">
            <IconsLoGo class="nav-mobile__logo" />
        </NuxtLink>
        <div
            class="nav-mobile__toggle"
            :class="{turn: navBar.navBarToggle}"
            @click="toggleNavbar()"
        >
            <div class="nav-mobile__toggle__item" />
            <div class="nav-mobile__toggle__item" />
            <div class="nav-mobile__toggle__item" />
        </div>
        <ul
            class="nav-mobile__box"
            :class="{toggeled: navBar.navBarToggle}"
        >
            <li
                v-for="item in navBar.navBarItems"
                :key="item"
            >
                <NuxtLink
                    class="nav-mobile__box--item"
                    :to="{path:`${item.path}`, hash:`${item.hash}`}"
                >
                    <span>{{ item.number }}</span>{{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { reactive, computed } from 'vue'
const navBar = reactive({
    navBarItems: [
        { name: 'home', number: '.01', path: '/', hash: '#home' },
        { name: 'about', number: '.02', path: '/', hash: '#about' },
        { name: 'work', number: '.03', path: '/', hash: '#work' },
        { name: 'blog', number: '.04', path: '/blog', hash: '#/#' }],
    navBarToggle: false
})
computed(() => {
    return navBar
})

const toggleNavbar = () => {
    navBar.navBarToggle === false
        ? navBar.navBarToggle = true
        : navBar.navBarToggle = false
}

</script>

<style lang="scss" scoped>
.nav-mobile {
        @apply flex justify-between p-2 font-Shure-Tech-sans px-8 w-full mt-2 top-0 sticky z-30;

        &__logo {
            @apply w-24;
        }

        &__toggle {
            @apply transition ease-out bg-blue-zodiac-500 absolute top-5 right-10 w-12 h-14 z-50 flex gap-2 flex-col justify-center;

            &__item{
                @apply bg-aquamarine-700 rounded-lg w-10 h-1 self-center;
            }

        }

        .turn {
            @apply transition ease-out rotate-90;
        }

        &__box {
            @apply flex flex-col pt-36 pl-8 gap-12 absolute top-0 right-0 bg-blue-zodiac-500 w-6/12 h-screen transition ease-linear translate-x-full;

            &--item {
                @apply mx-1 p-4 text-moon-raker rounded-3xl hover:shadow-md hover:shadow-aquamarine-500;

                > span {
                @apply mr-1 text-aquamarine-500;
                }
            }

        }

        .toggeled{
                @apply transition ease-out translate-x-5;
            }
    }
</style>
