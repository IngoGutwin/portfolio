<template>
    <div class="container mx-auto flex flex-col gap-12">
        <header class="header">
            <nav class="header__nav flex justify-between">
                <NuxtLink to="/"><IconsLogo class="header__nav__logo"/></NuxtLink>
                <ul class="header__nav__box flex self-center">
                    <li class="header__nav__box--item">
                        <NuxtLink to="/">&lt;<span class="text-aquamarine-500">home<span class="">/</span></span>&gt;</NuxtLink>
                    </li>
                    <li class="header__nav__box--item"><NuxtLink><span>&lt;</span>about<span>/</span>&gt;</NuxtLink></li>
                    <li class="header__nav__box--item"><NuxtLink>&lt;my-work/&gt;</NuxtLink></li>
                    <li class="header__nav__box--item"><NuxtLink to="/blog">&lt;my-blog/&gt;</NuxtLink></li>
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
    @apply mt-2 shadow-xl shadow-slate-600 hover:shadow-orange-600 rounded-xl;

    &__nav {
        @apply p-2;

        &__logo {
            @apply w-64;
        }

        &__box {
            
            &--item {
                @apply mx-4 hover:shadow-orange-600 p-4;
            }
        }
    }
}

</style>