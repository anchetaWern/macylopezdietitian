<script setup lang="ts">
defineProps<{
  role: string
  organization: string
  points: string[]
}>()
</script>

<template>
  <article class="card card--experience">
    <p class="card__eyebrow">{{ organization }}</p>
    <h3>{{ role }}</h3>
    <ul class="feature-list">
      <li v-for="point in points" :key="point">{{ point }}</li>
    </ul>
  </article>
</template>
