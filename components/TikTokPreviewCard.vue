<script setup lang="ts">
type TikTokOEmbed = {
  title?: string
  author_name?: string
  author_url?: string
  thumbnail_url?: string
  thumbnail_width?: number
  thumbnail_height?: number
}

const props = defineProps<{
  url: string
  caption: string
  title: string
}>()

const { data } = await useAsyncData<TikTokOEmbed | null>(
  `tiktok-preview:${props.url}`,
  () =>
    $fetch<TikTokOEmbed>('https://www.tiktok.com/oembed', {
      params: { url: props.url }
    }).catch(() => null),
  {
    server: false,
    default: () => null
  }
)
</script>

<template>
  <article class="card card--tiktok">
    <a class="tiktok-preview" :href="props.url" target="_blank" rel="noreferrer">
      <div class="tiktok-preview__media" :class="{ 'tiktok-preview__media--fallback': !data?.thumbnail_url }">
        <img v-if="data?.thumbnail_url" class="tiktok-preview__image" :src="data.thumbnail_url" :alt="data.title || props.title" loading="lazy" decoding="async">
        <div v-else class="tiktok-preview__fallback" aria-hidden="true">
          <span class="tiktok-preview__fallback-icon">TikTok</span>
          <span>Preview available on TikTok</span>
        </div>
      </div>
      <div class="tiktok-preview__content">
        <p class="tiktok-preview__eyebrow">TikTok preview</p>
        <h3>{{ props.title }}</h3>
        <p>{{ props.caption }}</p>
        <span class="inline-link">Open post</span>
      </div>
    </a>
  </article>
</template>
