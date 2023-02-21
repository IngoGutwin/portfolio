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
        fetch('https://api.github.com/users/ingogutwin/repos')
            .then(response => response.json())
            .then((data) => {
                this.projectsData = data.filter(item => !item.fork)
                console.table(this.projects)
                this.projectsData.forEach(item => console.log(item.keys_url))
            }).catch(error => console.error(error))
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

        }
    }

    &__description {
        @apply mx-auto;
    }

}

</style>
