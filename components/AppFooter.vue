<script setup lang="ts">
const { bookingUrl, footerDisclaimer, navLinks } = useSiteContent()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__grid">
      <div class="app-footer__brand">
        <p class="brand__name">Mary Clarice Lopez, RND</p>
        <p class="app-footer__subtitle">Registered Nutritionist-Dietitian</p>
        <p class="app-footer__subtitle">{PRC License No: XXX-XXXXX}</p>
      </div>

      <nav class="app-footer__nav" aria-label="Footer">
        <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="app-footer__actions">
        <PrimaryButton :href="bookingUrl" external>Book Consultation</PrimaryButton>
      </div>
    </div>
    <div class="container app-footer__bottom">
      <p class="app-footer__copyright">All rights reserved Mary Clarice Lopez, RND {{ currentYear }}</p>
      <SocialLinks />
    </div>
  </footer>
</template>
