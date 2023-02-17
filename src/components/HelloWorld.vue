<template>
    <section
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
    @apply flex flex-col gap-10 self-center mt-24 min-h-[550px] sm:w-8/12 lg:w-8/12 xl:w-6/12;

    &__heading {
        &--h1 {
            @apply font-Shure-Tech-sans text-base text-aquamarine-500;

            > span {
                @apply uppercase font-Shure-Tech-sans text-5xl bg-clip-text text-transparent bg-gradient-to-b from-blue-zodiac-50 to-aquamarine-700;
            }
        }
        &--h2 {
            @apply font-bold font-Public-sans-serif text-zinc-400 text-7xl;

            > span {
                @apply font-extrabold font-Open-Dyslex-serif bg-clip-text text-transparent animate-bounce;
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
        @apply sm:w-2/3 lg:w-1/2 text-zinc-400 font-Public-sans-serif text-base;
    }

}
</style>
