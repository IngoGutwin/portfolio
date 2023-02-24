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
        <div class="projects__every">
            <TheProject :projects-data="projectsData" />
        </div>
    </section>
</template>

<script>

export default {
    data () {
        return {
            projectsData: []
        }
    },
    beforeMount () {
        this.makeFetch()
    },
    methods: {
        makeFetch () {
            fetch('https://api.github.com/users/ingogutwin/repos')
                .then(response => response.json())
                .then((data) => {
                    this.projectsData = data.filter(item => !item.fork)
                }).catch(error => console.error(error))
        }
    }
}

</script>

<style lang="scss" scoped>
.projects {
    @apply flex flex-col min-h-[550px] gap-5 py-16 w-11/12 h-screen;

    &__info {
        @apply mx-auto flex justify-start w-11/12;

        &__heading {
            @apply font-bold font-Public-sans-serif text-aquamarine-500 text-xl;

            > span {
                @apply font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-aquamarine-700 to-blue-zodiac-50;
            }

            &::after {
                content: "";
                position: absolute;
                margin: .8rem 0  0 2rem;
                width: 20%;
                border: solid 1px theme("colors.moon-raker");
            }
        }
    }

    &__every {
        @apply mx-auto w-11/12 h-screen;
    }

}

</style>
