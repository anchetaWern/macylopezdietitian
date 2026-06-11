<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    href?: string
    external?: boolean
    variant?: 'solid' | 'outline' | 'text'
  }>(),
  {
    to: undefined,
    href: undefined,
    external: false,
    variant: 'solid'
  }
)
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="button" :class="`button--${variant}`">
    <slot />
  </NuxtLink>
  <a
    v-else
    :href="href"
    class="button"
    :class="`button--${variant}`"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer' : undefined"
  >
    <slot />
  </a>
</template>
