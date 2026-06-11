<script setup lang="ts">
const props = defineProps<{
  title: string
  description?: string
  buttonText?: string
}>()

const { bookingUrl } = useSiteContent()
</script>

<template>
  <section class="cta-section">
    <div class="container cta-section__inner">
      <div>
        <h2>{{ props.title }}</h2>
        <p v-if="props.description">{{ props.description }}</p>
      </div>
      <PrimaryButton :href="bookingUrl" external>{{ props.buttonText || 'Book Consultation' }}</PrimaryButton>
    </div>
  </section>
</template>
