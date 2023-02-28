<template>
    <nav
        class="navBar"
        :class="{'-translate-y-40': !scrollUp && !navBarToggle}"
    >
        <NuxtLink to="/">
            <nuxt-icon
                name="logo"
                filled
                class="navBar__logo"
            />
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
                <NuxtLink to="https://github.com/IngoGutwin">
                    <nuxt-icon
                        name="github"
                        class="navBar__box__icons--item"
                    />
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/ingo-gutwin-16b151145/">
                    <nuxt-icon
                        name="linkedin"
                        class="navBar__box__icons--item"
                    />
                </NuxtLink>
                <NuxtLink to="https://twitter.com/IngoGutwin">
                    <nuxt-icon
                        name="twitter"
                        class="navBar__box__icons--item"
                    />
                </NuxtLink>
            </div>
            <a
                class="navBar__box__mail"
                href="mailto:ingogutwin@gmail.com"
            >
                get in touch
            </a>
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
        }, 100))
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
        @apply text-7xl;
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
            @apply mx-1 max-w-fit text-moon-raker rounded-3xl p-4 transition-all duration-200;

                &:hover {
                    @apply ease-out shadow-md shadow-aquamarine-500 -translate-y-2 scale-105;
                }

            span {
                @apply mr-1 text-aquamarine-500;
            }

        }

        &__icons {
            @apply md:hidden flex mx-auto gap-4 my-4 h-11;

            &--item {
                @apply text-2xl text-moon-raker hover:text-aquamarine-500 transition-all;

                &:hover {
                    @apply ease-in text-4xl text-blue-zodiac-100;
                }
            }
        }

        &__mail {
            @apply md:hidden border border-aquamarine-500 rounded-md text-aquamarine-500 text-center whitespace-normal p-2 mx-auto mt-4 transition-all;

            &:hover {
                @apply translate-y-2 scale-105 text-moon-raker border-moon-raker;
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
            @apply text-8xl;
        }

        &__toggle {
            @apply hidden;
        }

        &__box {
            @apply static flex-row justify-end pt-4 bg-white/0 backdrop-blur-none w-full h-full transform-none;
        }
    }
}
</style>
