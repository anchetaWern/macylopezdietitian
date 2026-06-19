<script setup lang="ts">
const { bookingUrl, collaborationItems } = useSiteContent()

useSeoMeta({
  title: 'Contact Mary Clarice Lopez, RND',
  description:
    'Contact Mary Clarice Lopez, RND for nutrition consultations, wellness talks, nutrient analysis, meal planning, and brand collaborations.'
})
</script>

<template>
  <div>
    <section class="hero hero--inner">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="hero__eyebrow">Contact</p>
          <h1>Get in Touch</h1>
          <p class="hero__lead">
            For nutrition consultations, wellness talks, meal planning, product nutrient analysis, or collaborations, you may book through SeriousMD or send an inquiry at macylopez.nutrition@gmail.com
          </p>
          <div class="button-row">
            <PrimaryButton :href="bookingUrl" external>Book Consultation via SeriousMD</PrimaryButton>
            <PrimaryButton to="#social-media" variant="outline">Social Media</PrimaryButton>
          </div>
        </div>
        <PlaceholderMedia
          src="/images/contact-rnd.jpg"
          alt="Nutrition collaboration consultation"
          label="Contact and collaboration placeholder"
        />
      </div>
    </section>

    <section id="social-media" class="section">
      <div class="container contact-layout">
        <div class="card card--contact-intro">
          <SectionHeading
            eyebrow="Social media"
            title="Connect on social media"
            description="Follow Mary Clarice Lopez, RND for updates, tips, and professional nutrition content."
          />
          <SocialLinks show-labels />
        </div>

        <aside class="card card--collaboration">
          <SectionHeading
            eyebrow="Collaboration note"
            title="Additional professional services"
          />
          <ul class="feature-list">
            <li v-for="item in collaborationItems" :key="item">{{ item }}</li>
          </ul>
          <PrimaryButton :href="bookingUrl" external>Book Consultation</PrimaryButton>
        </aside>
      </div>
    </section>
  </div>
</template>
