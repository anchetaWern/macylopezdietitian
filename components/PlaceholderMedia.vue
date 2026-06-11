<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    variant?: 'portrait' | 'landscape'
    src?: string
    alt?: string
  }>(),
  {
    variant: 'portrait'
  }
)
</script>

<template>
  <div
    v-if="src"
    class="placeholder-media placeholder-media--image"
    :class="`placeholder-media--${variant}`"
  >
    <img
      class="placeholder-media__image"
      :src="src"
      :alt="alt || label"
      loading="eager"
      fetchpriority="high"
      decoding="async"
    >
  </div>
  <div v-else class="placeholder-media" :class="`placeholder-media--${variant}`" role="img" :aria-label="label">
    <div class="placeholder-media__shape placeholder-media__shape--leaf" />
    <div class="placeholder-media__shape placeholder-media__shape--plate" />
    <p>{{ label }}</p>
  </div>
</template>
