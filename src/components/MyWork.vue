<template>
    <section
        id="about"
        class="about"
    >
        <div class="about__info">
            <h2
                class="about__info__heading"
            >
                .03 <span>Projects</span>
            </h2>
            <p class="about__info__description" />
            <p class="about__info__description--next" />
            <p class="about__info__description--next" />
            <ul class="about__info__technologies" />
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            technologies: [
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'JavaScript' },
                { name: 'WordPress' }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.about {
    @apply flex flex-wrap min-h-[550px] py-16 w-11/12 h-screen;

    &__info {
        @apply flex flex-col gap-5 w-11/12 mx-auto self-center;

        &__heading {
            @apply font-bold font-Public-sans-serif text-aquamarine-500 text-xl;

            > span {
                @apply font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-aquamarine-700 to-blue-zodiac-50;
            }

            > span::after {
                content: "";
                position: absolute;
                margin: .8rem 0  0 2rem;
                width: 20%;
                border: solid 1px theme("colors.zinc.700");
            }
        }

        &__description {
            @apply text-zinc-400 font-Public-sans-serif text-sm;

            &--next {
                @apply text-zinc-400 font-Public-sans-serif text-sm;
            }
        }

        &__technologies {
            @apply flex justify-around whitespace-nowrap mb-8;
        }
    }

    &__photo {
        @apply bg-photo bg-center bg-cover h-2/6 w-8/12 self-center mx-auto sm:w-6/12 md:w-3/12 relative rounded-[2em];

        &::before {
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            background-color: theme('colors.aquamarine.500');
            opacity: .5;
            border-radius: 2em;
            transition: opacity 500ms;
        }

        &:hover::before {
            opacity: 0.03;
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            margin: 2em 0 0 2em;
            width: 100%;
            height: 100%;
            z-index: -1;
            border: solid;
            border-color: theme('colors.aquamarine.600');
            opacity: .5;
            border-radius: 2rem;
            transition: margin 300ms;
        }

        &:hover::after {
            margin: 0 0 0 0;
        }

    }
}

@screen md {
    .about {
        @apply w-11/12 items-center;

        &__info{
            @apply w-5/12 order-2;
        }
    }
}

@screen lg {
    .about {
        @apply w-8/12;
    }
}

</style>
