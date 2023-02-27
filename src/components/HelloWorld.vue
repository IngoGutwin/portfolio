<template>
    <section
        id="home"
        class="intro"
    >
        <h1 class="intro__heading--h1">
            Hey, I'm <span>Ingo</span>
        </h1>
        <h2 class="intro__heading--h2">
            I bring
            <span>ideas</span> to
            <span>life <br></span> with
            <span>code</span>.
        </h2>
        <p class="intro__description">
            Passionate and driven programmer with a strong interest in creating new and innovative solutions through code. Constantly seeking to improve skills and stay up-to-date with industry developments to create better user experiences.
        </p>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.intro {
    @apply flex flex-col justify-center gap-10 h-screen min-h-[550px] w-10/12;

    &__heading {
        @apply max-w-sm px-7;

        &--h1 {
            @apply font-Shure-Tech-sans text-base text-aquamarine-500;

            > span {
                @apply uppercase font-Shure-Tech-sans text-3xl bg-clip-text text-transparent bg-gradient-to-b from-blue-zodiac-50 to-aquamarine-700;
            }
        }
        &--h2 {
            @apply font-bold font-Public-sans-serif text-moon-raker text-5xl;

            > span {
                @apply font-bold font-Open-Dyslex-serif bg-clip-text text-transparent;
            }
            > span:nth-child(1) {
                @apply bg-gradient-to-r from-aquamarine-700 to-blue-zodiac-50;
            }
            > span:nth-child(2) {
                @apply bg-gradient-to-r from-blue-zodiac-50 to-aquamarine-700;
            }
            > span:nth-child(3) {
                @apply bg-gradient-to-l from-aquamarine-700 to-blue-zodiac-50;
            }
        }
    }

    &__description {
        @apply text-zinc-400 font-Public-sans-serif text-base;
    }
}

@screen xs {
    .intro {
        @apply w-9/12
    }
}

@screen sm {
    .intro {
        @apply w-10/12 px-6;

        &__heading {
            &--h1 {

                > span {
                    @apply text-5xl;
                }
            }
            &--h2 {
                > span {
                    @apply font-extrabold;
                }
            }
        }

        &__description {
            @apply w-9/12;
        }

    }
}

@screen md {
    .intro {
        @apply w-10/12;

        &__heading--h2 {
            @apply text-7xl;
        }
    }
}

@screen lg {
    .intro {
        @apply w-7/12 px-0;

        &__description {
            @apply w-7/12;
        }
    }
}

</style>
