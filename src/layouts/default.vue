<template>
    <div class="layout">
        <NavBar class="layout__navbar" />
        <div class="layout__left">
            <IconsGitHub :endpoint="`profile`" />
            <IconsTwitteR />
            <IconsLinkedIn />
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
        @apply hidden md:flex flex-col fixed w-[4%] gap-6 justify-center items-center h-screen;
    }

    &__center {
        grid-area: content;
        @apply flex flex-col items-center;
    }

    &__right {
        grid-area: barRight;
        @apply hidden h-screen md:flex flex-col justify-center items-center fixed right-0 w-[4%];

        &__link {
            @apply text-sm rotate-90 text-moon-raker hover:text-aquamarine-500;
        }
    }
}

</style>
