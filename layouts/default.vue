<template>
    <div class="container mx-auto">
        <header>
            <nav class="flex justify-between">
                <NuxtLink to="/">Home</NuxtLink>
                <ul class="flex">
                    <li><NuxtLink to="/">&lt;home /&gt;</NuxtLink></li>
                    <li><NuxtLink>&lt;about /&gt;</NuxtLink></li>
                    <li><NuxtLink>&lt;my work /&gt;</NuxtLink></li>
                    <li><NuxtLink to="/blog">&lt;my Blog /&gt;</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

</script>

<style lang="sass" scoped>

</style>