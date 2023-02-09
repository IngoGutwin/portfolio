<template>
    <ContentList class="content-list" path="/blog" v-slot="{ list }">
        <div class="content-list__block" v-for="article in list" :kex="article._path">
            <nuxt-link :href="article._path">
                <h2 class="content-list__block--heading">{{ article.title }}</h2>
                <p class="content-list__block--description>">{{ article.description }}</p>
            </nuxt-link>
        </div>
    </ContentList>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.content-list {
    @apply flex flex-wrap;

    &__block {
        @apply p-4 rounded-xl text-aquamarine-200 hover:shadow-md hover:shadow-aquamarine-500;

        &--heading {
            @apply py-4 text-2xl font-bold;
        }
    }
}

</style>