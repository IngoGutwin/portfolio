<template>
    <section
        id="projects"
        class="projects"
    >
        <div class="projects__info">
            <h2
                class="projects__info__heading"
            >
                .03 <span>My Projects</span>
            </h2>
        </div>
        <div class="projects__description">
            this section is comming soon :)
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}

</script>

<style lang="scss" scoped>
.projects {
    @apply flex flex-col min-h-[550px] py-16 w-11/12 h-screen;

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
    }

    &__description {
        @apply text-aquamarine-500 text-5xl font-bold animate-bounce m-auto;
    }
}

</style>
