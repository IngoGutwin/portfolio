<template>
    <ContentDoc
        v-slot="{ doc }"
    >
        <ContentRenderer :value="doc" />
    </ContentDoc>
</template>

<script>
</script>

<style lang="scss" scoped>
ul {
    @apply ml-8;
}

a {
    @apply text-aquamarine-400 font-bold font-Public-sans-serif;
}

</style>
