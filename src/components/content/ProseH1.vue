<template>
    <h1 :id="id" class="text-2xl font-bold my-4 text-aquamarine-500 uppercase font-Open-Dyslex-Mono-serif">
      <slot/>
    </h1>
</template>
  
<script setup lang="ts">
    defineProps<{ id?: string, class?: string}>()
</script>