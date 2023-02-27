<template>
    <nav
        class="navBar"
        :class="{'-translate-y-40': !scrollUp && !navBarToggle}"
    >
        <NuxtLink to="/">
            <IconsHaiGuaiLogo class="navBar__logo" />
        </NuxtLink>
        <div
            class="navBar__toggle"
            :class="{turn: navBarToggle}"
            @click="toggleNavbar"
        >
            <div
                v-for="n in 3"
                :key="n"
                class="navBar__toggle__item"
            />
        </div>
        <ul
            class="navBar__box"
            :class="{toggeled: navBarToggle}"
        >
            <NuxtLink
                v-for="item in navBarItems"
                :key="item"
                class="navBar__box--item"
                :to="{path:`${item.path}`, hash:`${item.hash}`}"
            >
                <span>{{ item.number }}</span>{{ item.name }}
            </NuxtLink>
            <div class="navBar__box__icons">
                <IconsGitHub
                    :endpoint="`profile`"
                    class="md:hidden ml-4"
                />
                <IconsTwitteR class="md:hidden ml-4" />
                <IconsLinkedIn class="md:hidden ml-4" />
                <a
                    class="text-moon-raker hover:text-aquamarine-500 md:hidden ml-4"
                    href="mailto:ingogutwin@gmail.com"
                >ingogutwin@gmail.com</a>
            </div>
        </ul>
    </nav>
</template>

<script>
import { debounce } from 'lodash-es'

export default {
    data () {
        return {
            navBarToggle: false,
            navBarItems: [
                { name: 'home', number: '.01', path: '/', hash: '#home' },
                { name: 'about', number: '.02', path: '/', hash: '#about' },
                { name: 'projects', number: '.03', path: '/', hash: '#projects' },
                { name: 'blog', number: '.04', path: '/blog', hash: '#/#' }
            ],
            scrollUp: true,
            newScrollY: 0,
            oldScrollY: 0
        }
    },
    beforeMount () {
        window.addEventListener('scroll', debounce(() => {
            this.handleScroll()
        }, 150))
    },
    methods: {
        toggleNavbar () {
            this.navBarToggle === false
                ? this.navBarToggle = true
                : this.navBarToggle = false
        },
        handleScroll () {
            this.newScrollY = window.scrollY
            if (this.oldScrollY > this.newScrollY) {
                this.scrollUp = true
                this.oldScrollY = this.newScrollY
            } else if (this.oldScrollY < this.newScrollY) {
                this.scrollUp = false
                this.oldScrollY = this.newScrollY
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.navBar {
    @apply transition ease-out duration-500 flex justify-between items-center pr-4 font-Shure-Tech-sans w-full top-0 z-50 fixed;

    &__logo {
        @apply w-24;
    }

    &__toggle {
        @apply transition ease-out w-12 h-14 z-50 flex gap-2 flex-col justify-center;

        &__item{
            @apply rounded-lg bg-aquamarine-800 w-10 h-1 self-center;
        }

        &:hover & {
            &__item {
                background-color: theme('colors.aquamarine.400');
            }
        }
    }

    &__box {
        @apply flex flex-col pt-36 px-8 gap-3 fixed top-0 right-0 w-6/12 bg-blue-zodiac-500/60 backdrop-blur-sm h-screen transition ease-linear translate-x-full;

        &--item {
            @apply mx-1 max-w-min text-moon-raker rounded-3xl hover:shadow-md hover:shadow-aquamarine-500 p-4;

            span {
                @apply mr-1 text-aquamarine-500;
            }
        }

        &__icons {
            @apply flex flex-col gap-4;

            > * {
                @apply p-4;
            }
        }
    }

    .turn {
        @apply transition ease-out rotate-180 hue-rotate-15;
    }

    .toggeled{
        @apply transition ease-out translate-x-5;
    }
}

@screen md {
    .navBar {
        @apply bg-blue-zodiac-500/60 backdrop-blur-sm;

        &__logo {
            @apply w-36;
        }

        &__toggle {
            @apply hidden;
        }

        &__box {
            @apply flex-row justify-end pt-4 static bg-white/0 backdrop-blur-none w-full h-full transform-none;

            &--item {
                @apply self-center;
            }
        }
    }
}
</style>
