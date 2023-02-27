<template>
    <li
        v-for="project in projectsData"
        :key="project"
        class="project"
    >
        <h2
            class="project__heading"
        >
            {{ transformTitle(project.name, 'heading') }}
        </h2>

        <div class="project__description">
            <p>{{ project.description }}</p>
        </div>

        <ul class="project__topics">
            <li
                v-for="topic in project.topics"
                :key="topic"
                class="project__topics--topic"
            >
                {{ topic }}
            </li>
        </ul>

        <div class="project__icons">
            <IconsGitHub
                :endpoint="project.name"
            />
            <IconsExternalLink
                :endpoint="project.homepage"
            />
        </div>

        <div
            :class="`project--${transformTitle(project.name, 'null')}`"
        />
    </li>
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
        @apply grid grid-cols-12 grid-rows-xs bg-blue-zodiac-500/70 hover:bg-blue-zodiac-500/60 rounded-lg hover:shadow-lg hover:shadow-aquamarine-500 p-1 xs:p-4;

        &__heading {
            @apply col-start-1 col-span-6 row-start-1 text-3xl font-extrabold font-Open-Dyslex-serif bg-clip-text text-transparent bg-gradient-to-l from-aquamarine-700 to-blue-zodiac-50 p-4;
        }

        &__description {
            @apply col-start-1 col-span-full row-start-2 row-span-2 py-2 text-xs text-aquamarine-300 p-4;

        }

        &__topics {
            @apply flex flex-wrap gap-3 col-span-full row-start-5 uppercase;

            &--topic {
                @apply min-w-fit text-lg text-aquamarine-500;
            }
        }

        &__icons {
            @apply flex gap-4 col-span-full row-start-4 self-center p-4;
        }

        &--art-gallery {
            @apply bg-art_gallery rounded-lg -z-10 bg-cover bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full relative before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-zodiac-500/70 before:z-10;
        }
        &--space-tourism {
            @apply bg-space_tourism rounded-lg -z-10 bg-cover bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full;
        }
        &--portfolio {
            @apply bg-portfolio bg-cover rounded-lg -z-10 bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full;
        }
        &--todo-app {
            @apply bg-todo_app bg-cover rounded-lg -z-10 bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full relative before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-zodiac-500/70 before:z-10;
        }
    }

@screen md {
    .project {
        @apply grid-rows-md;

        &__description {
            @apply col-start-1 col-span-6 row-start-2 p-8 my-8 bg-blue-zodiac-300 rounded-lg;
        }

        &__topics {
            @apply text-xl;
        }

        &__icons {
            @apply flex-col col-start-12 row-start-1 row-span-2 self-center justify-self-end;
        }

        &--art-gallery {
            @apply col-start-5 col-span-full row-start-1 row-span-full;
        }

        &--space-tourism {
            @apply col-start-5 col-span-full row-start-1 row-span-full;
        }

        &--portfolio {
            @apply col-start-5 col-span-full row-start-1 row-span-full;
        }

        &--todo-app {
            @apply col-start-5 col-span-full row-start-1 row-span-full;
        }
    }
}

</style>
