<template>
    <NuxtLink
        target="_blank"
        :to="endpoint"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="external-link"
        >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line
                x1="10"
                y1="14"
                x2="21"
                y2="3"
            />
        </svg>
    </NuxtLink>
</template>

<script>
export default {
    props: { endpoint: { type: String, required: true } }
}
</script>

<style lang="scss" scoped>
.external-link {
    @apply w-6 md:w-8 stroke-moon-raker hover:stroke-aquamarine-500;
}
</style>
