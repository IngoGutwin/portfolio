<template>
    <div class="layout">
        <NavBar class="layout__navBar" />
        <NavBarMobile class="layout__navBarMobile" />
        <main class="layout__main">
            <div class="layout__main__left" />
            <slot class="layout__main__center" />
            <div class="layout__main__right" />
        </main>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.layout {
    &__navBar {
        @apply hidden sm:flex;
    }

    &__navBarMobile {
        @apply flex sm:hidden;
    }

    &__main {
        @apply flex flex-col items-center;

        &__left,
        &__right {
            @apply w-40
        }

        &__center {
            @apply container mx-auto;
        }
    }
}

</style>
