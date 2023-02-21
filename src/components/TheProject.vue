<template>
    <div
        v-for="project in projectsData"
        :key="project"
        class="project"
    >
        <h2>{{ project.name }}</h2>
    </div>
</template>

<script>
export default {
    props: { projectsData: { type: Array, required: true } }
}
</script>

<style lang="scss" scoped>

</style>
