<template>
    <section
        id="about"
        class="about"
    >
        <div class="about__info">
            <h2
                class="about__info__heading"
            >
                .02 <span>About Me</span>
            </h2>
            <p class="about__info__description">
                Hi, my name is Ingo and I really love creating things with code.
                My interest in programming started in 2020 when I learned what HTML, CSS,
                and JavaScript were and how these technologies work together.
                I'm particularly interested in the technical side of things and
                understanding how these technologies actually function.
            </p>
            <p class="about__info__description--next">
                My next goal is to master JavaScript and continue developing my programming skills,
                always with the aim of building applications that are scalable and efficient under the hood.
            </p>
            <p class="about__info__description--next">
                Here are a few technologies I’ve been working with recently:
            </p>
            <ul class="about__info__technologies">
                <li
                    v-for="item in technologies"
                    :key="item"
                >
                    ▹ {{ item.name }}
                </li>
            </ul>
        </div>
        <div class="about__photo" />
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
    @apply flex flex-wrap w-11/12 h-screen my-44;

    &__info {
        @apply flex flex-col gap-5 mx-auto;

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
                border: solid 1px theme("colors.moon-raker");
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
        @apply bg-photo bg-center bg-cover h-2/6 w-8/12 mx-auto sm:w-6/12 md:w-3/12 relative rounded-[2em] hover:bg-blue-zodiac-400/75;

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
        @apply w-9/12;
    }
}

</style>
