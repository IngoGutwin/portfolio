<template>
    <div class="layout">
        <NavBar class="layout__navbar" />
        <div class="layout__left">
            <div class="layout__left__box">
                <NuxtLink to="https://github.com/IngoGutwin">
                    <nuxt-icon
                        name="github"
                        class="layout__left__box--item"
                    />
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/ingo-gutwin-16b151145/">
                    <nuxt-icon
                        name="linkedin"
                        class="layout__left__box--item"
                    />
                </NuxtLink>
                <NuxtLink to="https://twitter.com/IngoGutwin">
                    <nuxt-icon
                        name="twitter"
                        class="layout__left__box--item"
                    />
                </NuxtLink>
            </div>
        </div>
        <div class="layout__center">
            <slot />
        </div>
        <div class="layout__right">
            <a
                class="layout__right__link"
                href="mailto:ingogutwin@gmail.com"
            >
                ingogutwin@gmail.com
            </a>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.layout {
    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-areas:
        'navbar navbar navbar'
        'barLeft content barRight'
        'barLeft content barRight'
        'barLeft content barRight'
    ;
    margin-bottom: 10rem;

    &__navbar {
        grid-area: navbar;
    }

    &__left {
        grid-area: barLeft;
        @apply hidden md:flex flex-col fixed w-[4%] justify-center items-center h-screen;

        &__box {
            @apply h-32 flex flex-col justify-between items-center w-full;

            &--item {
                @apply text-moon-raker text-3xl transition-all;

                &:hover {
                    @apply ease-in text-4xl text-blue-zodiac-100;
                }
            }
        }
    }

    &__center {
        grid-area: content;
        @apply flex flex-col items-center;
    }

    &__right {
        grid-area: barRight;
        @apply hidden h-screen md:flex flex-col justify-center items-center fixed right-0 w-[4%];

        &__link {
            @apply text-sm rotate-90 text-moon-raker transition-all ease-in duration-200 hover:text-aquamarine-500;
        }
    }
}

</style>
