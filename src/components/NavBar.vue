<template>
    <nav class="navbar">
        <NuxtLink to="/">
            <IconsLoGo class="navbar__logo" />
        </NuxtLink>
        <ul class="navbar__box flex self-center">
            <li
                v-for="item in navBar"
                :key="item"
            >
                <NuxtLink
                    class="navbar__box--item"
                    :to="{path:`${item.path}`, hash:`${item.hash}`}"
                >
                    <span>{{ item.number }}</span>{{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            navBar: [
                { name: 'home', number: '.01', path: '/', hash: '#home' },
                { name: 'about', number: '.02', path: '/', hash: '#about' },
                { name: 'work', number: '.03', path: '/', hash: '#work' },
                { name: 'blog', number: '.04', path: '/blog', hash: '#' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
        @apply flex justify-between p-2 font-Shure-Tech-sans px-8 w-full mt-2 sticky top-0;

        &__logo {
            @apply w-24;
        }

        &__box {
            &--item {
                @apply mx-1 p-4 text-moon-raker rounded-3xl hover:shadow-md hover:shadow-aquamarine-500;

                > span {
                @apply mr-1 text-aquamarine-500;
                }
            }
        }
    }
</style>
