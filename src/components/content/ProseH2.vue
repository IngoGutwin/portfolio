<template>
    <h2
        :id="id"
        class="text-xl font-bold my-4 text-moon-raker uppercase font-Public-sans-serif"
    >
        <slot />
    </h2>
</template>

<script setup lang="ts">
defineProps<{ id?: string, class?: string }>()
</script>
