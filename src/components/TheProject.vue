<template>
    <section>
        <div
            v-for="project in projectsData"
            :key="project"
            class="project"
        >
            <div class="project__info">
                <h2
                    v-if="project.homepage"
                    class="project__info__heading"
                >
                    {{ transformTitle(project.name, 'heading') }}
                </h2>

                <div class="project__info__description">
                    {{ project.description }}
                </div>

                <NuxtLink
                    :to="`${project.homepage}`"
                    target="_blank"
                    external="true"
                />
            </div>
            <div
                :class="`project__img--${transformTitle(project.name, 'null')}`"
            />
        </div>
    </section>
</template>

<script>
export default {
    props: { projectsData: { type: Array, required: true } },
    methods: {
        transformTitle (string, useCase) {
            if (useCase === 'heading') {
                return string.replaceAll(/-|_/g, ' ')
            } else {
                return string.replaceAll(/_/g, '-')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.project {
    @apply grid grid-cols-12 h-full;

    &__info {
        @apply col-start-1 col-span-5;

        &__heading {
            @apply text-3xl font-bold font-Open-Dyslex-serif text-blue-zodiac-50;
        }
    }

    &__img {
        @apply col-start-6 col-span-6;

        &--art-gallery {
            @apply bg-art_gallery;
        }
        &--space-tourism {
            @apply bg-space_tourism w-full h-full;
        }
        &--portfolio {
            @apply bg-portfolio w-full h-full;
        }
        &--todo-app {
            @apply bg-todo_app w-full h-full;
        }
    }
}

</style>
