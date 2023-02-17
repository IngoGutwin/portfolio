<template>
    <div
        id="home"
        class="scroll-smooth"
    >
        <NavBar />
        <main class="main">
            <div class="main__left" />
            <slot class="main__center" />
            <div class="main__right" />
        </main>
    </div>
</template>

<script></script>

<style lang="scss" scoped>

.main {
    @apply flex flex-col items-center;

    &__left,
    &__right {
        @apply w-40
    }

    &__center {
        @apply container mx-auto;
    }
}
</style>
