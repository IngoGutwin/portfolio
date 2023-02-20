<template>
    <div
        id="layout"
        class="layout"
    >
        <NavBarMobile />
        <main class="layout__main">
            <div class="layout__main__left" />
            <slot class="layout__main__center" />
            <div class="layout__main__right" />
        </main>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.layout {

    &__main {
        @apply flex flex-col items-center gap-20;

        &__left,
        &__right {
            @apply w-40;
        }

        &__center {
            @apply container mx-auto;
        }
    }
}

</style>
