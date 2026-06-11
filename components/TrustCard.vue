<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <article class="card card--trust">
    <div class="trust-badge" aria-hidden="true" />
    <p>{{ text }}</p>
  </article>
</template>
