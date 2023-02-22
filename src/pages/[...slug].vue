<template>
    <ContentDoc
        v-slot="{ doc }"
    >
        <ContentRenderer
            :value="doc"
            class="article"
        />
    </ContentDoc>
</template>

<script>
export default {
    data () {
        return {
            checkboxes: []
        }
    },
    beforeMount () {
        this.checkboxes = document.querySelectorAll('input')
        this.removeDisabled()
    },
    methods: {
        removeDisabled () {
            this.checkboxes.forEach(item => {
                const attributes = ['disabled', 'checked']
                for (let i = 0; i < 2; i++) {
                    item.removeAttribute(attributes[i])
                }
                console.log(item)
            })
        }
    }
}
</script>

<style lang="scss">
.article {
    @apply max-w-sm px-4 mt-20 sm:mt-32 sm:max-w-xl md:max-w-2xl lg:w-10/12 lg:max-w-5xl mx-auto justify-center;

    ul {
        @apply ml-8;

        .task-list-item {
            @apply my-4;
        }
    }

    a {
        @apply text-aquamarine-400 font-bold font-Public-sans-serif;
    }

    pre {
        @apply bg-blue-zodiac-400 rounded-lg p-4;

        > code {
            @apply whitespace-pre-wrap;
        }
    }
}

</style>
