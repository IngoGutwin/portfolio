<template>
    <div>
        <ContentList
            v-slot="{ list }"
            class="content-list"
            path="/blog"
        >
            <div
                v-for="article in list"
                :key="article"
                class="content-list__block"
            >
                <nuxt-link
                    :href="article._path"
                >
                    <h2 class="content-list__block--heading">
                        {{ article.title }}
                    </h2>
                    <p class="content-list__block--description>">
                        {{ article.description }}
                    </p>
                </nuxt-link>
            </div>
        </ContentList>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content-list {
    @apply flex flex-col;

    &__block {
        @apply p-4 rounded-xl text-aquamarine-200 hover:shadow-md hover:shadow-aquamarine-500 text-center;

        &--heading {
            @apply py-4 text-2xl font-bold;
        }
    }
}
</style>
