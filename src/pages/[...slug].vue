<template>
    <ContentDoc>
        <template v-slot="{ doc }">
            <ContentRendererMarkdown :value="doc" />
        </template>
    </ContentDoc>
</template>

<script setup>

</script>

<style lang="scss" scoped>
ul {
    @apply ml-8;
}

a {
    @apply text-aquamarine-600 font-bold;
}

.task-list-item {
    @apply my-1;
}

</style>