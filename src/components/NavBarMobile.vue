<template>
    <nav
        class="nav-mobile"
        :class="{'-translate-y-40': !scrollUp}"
    >
        <NuxtLink to="/">
            <IconsHaiGuaiLogo class="nav-mobile__logo" />
        </NuxtLink>
        <div
            class="nav-mobile__toggle"
            :class="{turn: navBarToggle}"
            @click="toggleNavbar"
        >
            <div class="nav-mobile__toggle__item" />
            <div class="nav-mobile__toggle__item" />
            <div class="nav-mobile__toggle__item" />
        </div>
        <ul
            class="nav-mobile__box"
            :class="{toggeled: navBarToggle}"
        >
            <li
                v-for="item in navBarItems"
                :key="item"
                class="nav-mobile__box--item"
            >
                <NuxtLink
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
            navBarToggle: false,
            navBarItems: [
                { name: 'home', number: '.01', path: '/', hash: '#home' },
                { name: 'about', number: '.02', path: '/', hash: '#about' },
                { name: 'work', number: '.03', path: '/', hash: '#work' },
                { name: 'blog', number: '.04', path: '/blog', hash: '#/#' }
            ],
            scrollUp: true,
            newScrollY: 0,
            oldScrollY: 0
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll)
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
                console.log('it scrolls up')
                this.oldScrollY = this.newScrollY
                console.log(`scroll down newY-${this.newScrollY} oldY-${this.oldScrollY}`)
            } else if (this.oldScrollY < this.newScrollY) {
                this.scrollUp = false
                this.oldScrollY = this.newScrollY - 1
            }
        }
    }
}

</script>

<style lang="scss" scoped>
.nav-mobile {
        @apply transition ease-out flex justify-between pr-4 font-Shure-Tech-sans w-full top-0 z-50 fixed md:bg-blue-zodiac-500/80 md:backdrop-blur-md;

        &__logo {
            @apply w-24;
        }

        &__toggle {
            @apply transition ease-out w-12 h-14 z-50 mt-4 flex gap-2 flex-col justify-center md:hidden;

            &__item{
                @apply bg-aquamarine-700 rounded-lg w-10 h-1 self-center;
            }

        }

        &__box {
            @apply flex flex-col md:flex-row md:justify-end md:self-center pt-36 pl-8 md:pt-4 gap-12 fixed md:static bg-blue-zodiac-500/80 md:bg-none backdrop-blur-md md:backdrop-blur-none top-0 right-0 w-6/12 md:w-full h-screen md:h-10 transition ease-linear translate-x-full md:transform-none;

            &--item {
                @apply mx-1 text-moon-raker rounded-3xl hover:shadow-md hover:shadow-aquamarine-500 self-center p-6;

                span {
                    @apply mr-1 text-aquamarine-500;
                }
            }

        }

        .turn {
            @apply transition ease-out rotate-90;
        }

        .toggeled{
            @apply transition ease-out translate-x-5;
        }
    }
</style>
