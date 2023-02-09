<template>
    <div class="container mx-auto flex flex-col gap-12">
        <header class="header">
            <nav class="header__nav flex justify-between">
                <NuxtLink to="/"><IconsLogo class="header__nav__logo"/></NuxtLink>
                <ul class="header__nav__box flex self-center">
                    <li>
                        <NuxtLink class="header__nav__box--item" to="/">
                            <span>.01</span>Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="header__nav__box--item" to="#about">
                            <span>.02</span>About
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="header__nav__box--item" to="#Work">
                            <span>.03</span>Work
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="header__nav__box--item" to="/blog">
                            <span>.04</span>Blog
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.header {
    @apply mt-2;

    &__nav {
        @apply p-2 font-Shure-Tech-sans;

        &__logo {
            @apply w-32;
        }

        &__box {
            
            &--item {
                @apply mx-1 hover:shadow-md hover:shadow-aquamarine-500 p-4 rounded-3xl;

                > span {
                    @apply mr-1 text-aquamarine-500;
                }
            }
        }
    }
}

</style>