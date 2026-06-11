<script setup lang="ts">
defineProps<{
  items: { question: string; answer: string }[]
}>()
</script>

<template>
  <div class="faq-list">
    <details v-for="item in items" :key="item.question" class="faq-item">
      <summary>
        <span>{{ item.question }}</span>
        <span class="faq-item__icon" aria-hidden="true" />
      </summary>
      <p>{{ item.answer }}</p>
    </details>
  </div>
</template>
