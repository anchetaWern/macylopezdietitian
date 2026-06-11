<script setup lang="ts">
const { socialLinks } = useSiteContent()

withDefaults(
  defineProps<{
    showLabels?: boolean
  }>(),
  {
    showLabels: false
  }
)

const socialIcons: Record<string, string> = {
  Facebook:
    'M13.5 3H10a5 5 0 0 0-5 5v3H2v4h3v6h4v-6h3l1-4H9V8a1 1 0 0 1 1-1h3.5z',
  TikTok:
    'M14 3c.3 1.7 1.3 3 3 3.8V10a6.9 6.9 0 0 1-3-.7v5.4a4.7 4.7 0 1 1-4.7-4.7c.3 0 .7 0 1 .1v3a1.8 1.8 0 1 0 1.7 1.8z',
  YouTube:
    'M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8M10 15.5v-7l6 3.5z',
  Instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2zm10.8 1.7a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3M12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2',
  Threads:
    'M15.6 11.2a4.9 4.9 0 0 0-.4-2 3.7 3.7 0 0 0-3.4-2.1 3.9 3.9 0 0 0-4 3.1l2 .3a2 2 0 0 1 2-.9c1 0 1.5.4 1.7 1.2a12.7 12.7 0 0 0-1.8-.1c-3 0-4.8 1.2-4.8 3.4A3.4 3.4 0 0 0 10.5 18c1.3 0 2.4-.5 3.1-1.4a3.5 3.5 0 0 0 2.9 1.2c2.5 0 4.2-1.7 4.2-4.3 0-2.9-1.8-4.8-4.5-4.8v2c1.6 0 2.6 1.1 2.6 2.8 0 1.4-.8 2.3-2.1 2.3a1.7 1.7 0 0 1-1.7-1.2 6.4 6.4 0 0 0 .6-3.4m-2.4 1.6c-.4 1.8-1.4 2.8-2.6 2.8-.9 0-1.5-.5-1.5-1.3 0-1 1-1.5 2.7-1.5a8.7 8.7 0 0 1 1.4 0'
}
</script>

<template>
  <div class="social-links" :class="{ 'social-links--labeled': showLabels }">
    <a
      v-for="item in socialLinks"
      :key="item.href"
      class="social-links__item"
      :href="item.href"
      target="_blank"
      rel="noreferrer"
      :aria-label="item.label"
    >
      <span class="social-links__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path :d="socialIcons[item.label]" fill="currentColor" />
        </svg>
      </span>
      <span v-if="showLabels" class="social-links__label">{{ item.label }}</span>
    </a>
  </div>
</template>
