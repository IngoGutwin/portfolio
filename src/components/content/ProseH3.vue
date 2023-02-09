<template>
    <h3 :id="id" class="text-lg font-bold my-4 text-aquamarine-500">
      <slot/>
    </h3>
</template>
  
<script setup lang="ts">
  defineProps<{ id?: string, class?: string }>()
</script>