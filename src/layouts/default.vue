<template>
    <div
        id="layout"
        class="layout"
    >
        <NavBar
            class="layout__navBar"
            :class="{'transform-none': !scrollUp}"
        />
        <NavBarMobile
            class="layout__navBarMobile"
            :class="{'transform-none': !scrollUp}"
        />
        <main class="layout__main">
            <div class="layout__main__left" />
            <slot class="layout__main__center" />
            <div class="layout__main__right" />
        </main>
    </div>
</template>

<script>
export default {
    data () {
        return {
            scrollUp: true,
            newScrollY: 0,
            oldScrollY: 0
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll () {
            this.newScrollY = window.scrollY
            if (this.oldScrollY > this.newScrollY) {
                this.scrollUp = true
                console.log('it scrolls up')
                this.oldScrollY = this.newScrollY
                console.log(`scroll down newY-${this.newScrollY} oldY-${this.oldScrollY}`)
            } else if (this.oldScrollY < this.newScrollY) {
                this.scrollUp = false
                this.oldScrollY = this.newScrollY - 1
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.layout {
    &__navBar {
        @apply hidden sm:flex fixed;
    }

    &__navBarMobile {
        @apply flex sm:hidden fixed;
    }

    &__main {
        @apply flex flex-col items-center;

        &__left,
        &__right {
            @apply w-40
        }

        &__center {
            @apply container mx-auto;
        }
    }
}

</style>
