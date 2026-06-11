<script setup lang="ts">
const { navLinks, bookingUrl } = useSiteContent()
const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <NuxtLink class="brand" to="/" @click="closeMenu">
        <span class="brand__eyebrow">Registered Nutritionist-Dietitian</span>
        <span class="brand__name">Mary Clarice Lopez, RND</span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-controls="site-navigation"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Toggle navigation</span>
        <span />
        <span />
      </button>

      <nav id="site-navigation" class="site-nav" :class="{ 'site-nav--open': isOpen }" aria-label="Primary">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          class="site-nav__link"
          :to="link.to"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
        <PrimaryButton
          :href="bookingUrl"
          external
          variant="solid"
          class="site-nav__cta"
        >
          Book Consultation
        </PrimaryButton>
      </nav>
    </div>
  </header>
</template>
