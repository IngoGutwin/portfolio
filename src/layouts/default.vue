<template>
    <div class="layout">
        <NavBar class="layout__navbar" />
        <div class="layout__left">
            <IconsGitHub />
            <IconsTwitteR />
            <IconsLinkedIn />
        </div>
        <div class="layout__center">
            <slot />
        </div>
        <div class="layout__right" />
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

    &__navbar {
        grid-area: navbar;
    }

    &__left {
        grid-area: barLeft;
        @apply hidden md:flex flex-col fixed left-3 gap-6 justify-center h-screen;
    }

    &__center {
        grid-area: content;
        @apply flex flex-col items-center;
    }

    &__right {
        grid-area: barRight;
        @apply h-screen;
    }
}

</style>
