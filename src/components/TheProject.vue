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
            <NuxtLink
                :to="project.html_url"
            >
                <nuxt-icon
                    name="github"
                    class="project__icons--item"
                />
            </NuxtLink>
            <NuxtLink
                :to="project.homepage"
            >
                <nuxt-icon
                    name="extern-link"
                    class="project__icons--item"
                />
            </NuxtLink>
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
        @apply grid grid-cols-12 grid-rows-xs rounded-lg p-1 xs:p-4 bg-blue-zodiac-400;

        &__heading {
            @apply col-start-1 col-span-full row-start-1 text-3xl font-extrabold font-Open-Dyslex-serif text-blue-zodiac-50 p-4;
        }

        &__description {
            @apply col-start-1 col-span-full row-start-2 row-span-2 py-2 text-xs text-aquamarine-300 p-4 z-30;

        }

        &__topics {
            @apply flex flex-wrap gap-3 col-span-full row-start-5;

            &--topic {
                @apply min-w-fit text-lg text-aquamarine-500;
            }
        }

        &__icons {
            @apply flex col-start-2 col-span-2 h-full w-full row-start-4 self-center z-30 justify-between items-center mx-auto;

            &--item {
                @apply text-3xl text-moon-raker md:text-blue-zodiac-500 transition-all duration-200;

                &:hover {
                    @apply text-4xl text-aquamarine-500 md:text-blue-zodiac-100;
                }
            }
        }

        &--art-gallery {
            @apply bg-art_gallery rounded-lg -z-10 bg-cover bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full;
        }
        &--space-tourism {
            @apply bg-space_tourism rounded-lg -z-10 bg-cover bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full;
        }
        &--portfolio {
            @apply bg-portfolio bg-cover rounded-lg -z-10 bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full;
        }
        &--todo-app {
            @apply bg-todo_app bg-cover rounded-lg -z-10 bg-center bg-no-repeat w-full h-full col-start-1 col-span-full row-start-1 row-span-full;
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
            @apply flex-col col-start-12 row-start-2 row-span-1 self-center justify-self-end;
        }

        &--art-gallery {
            @apply col-start-5 col-span-full row-start-1 row-span-full z-10 relative;

            &::before {
                @apply content-[''] absolute w-full h-full z-50 bg-aquamarine-500 opacity-80 rounded-lg transition duration-300;
            }

            &:hover::before {
                @apply opacity-0 ease-in;
            }
        }

        &--space-tourism {
            @apply col-start-5 col-span-full row-start-1 row-span-full z-10 relative;

            &::before {
                @apply content-[''] absolute w-full h-full z-50 bg-aquamarine-500 opacity-80 rounded-lg transition duration-300;
            }

            &:hover::before {
                @apply opacity-0 ease-in;
            }
        }

        &--portfolio {
            @apply col-start-5 col-span-full row-start-1 row-span-full z-10 relative;

            &::before {
                @apply content-[''] absolute w-full h-full z-50 bg-aquamarine-500 opacity-80 rounded-lg transition duration-300;
            }

            &:hover::before {
                @apply opacity-0 ease-in;
            }
        }

        &--todo-app {
            @apply col-start-5 col-span-full row-start-1 row-span-full z-10 relative;

            &::before {
                @apply content-[''] absolute w-full h-full z-50 bg-aquamarine-500 opacity-80 rounded-lg transition duration-300;
            }

            &:hover::before {
                @apply opacity-0 ease-in;
            }
        }
    }
}

</style>
