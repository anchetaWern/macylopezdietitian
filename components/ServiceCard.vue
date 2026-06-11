<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <article class="card card--service">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <NuxtLink class="inline-link" to="/services">Learn more</NuxtLink>
  </article>
</template>
