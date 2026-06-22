<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    variant?: 'portrait' | 'landscape'
    src?: string
    srcset?: string
    webpSrcset?: string
    sizes?: string
    alt?: string
    width?: number
    height?: number
    loading?: 'eager' | 'lazy'
    fetchpriority?: 'high' | 'low' | 'auto'
  }>(),
  {
    variant: 'portrait',
    loading: 'lazy',
    fetchpriority: 'auto'
  }
)
</script>

<template>
  <div
    v-if="src"
    class="placeholder-media placeholder-media--image"
    :class="`placeholder-media--${variant}`"
  >
    <picture>
      <source
        v-if="webpSrcset"
        :srcset="webpSrcset"
        type="image/webp"
        :sizes="sizes"
      >
      <img
        class="placeholder-media__image"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
        :width="width"
        :height="height"
        :alt="alt || label"
        :loading="loading"
        :fetchpriority="fetchpriority"
        decoding="async"
      >
    </picture>
  </div>
  <div v-else class="placeholder-media" :class="`placeholder-media--${variant}`" role="img" :aria-label="label">
    <div class="placeholder-media__shape placeholder-media__shape--leaf" />
    <div class="placeholder-media__shape placeholder-media__shape--plate" />
    <p>{{ label }}</p>
  </div>
</template>
