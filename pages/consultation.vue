<script setup lang="ts">
const { bookingUrl, clinicHours, consultationFee, faqs, preparationChecklist } = useSiteContent()

useSeoMeta({
  title: 'Book a Nutrition Consultation | Mary Clarice Lopez, RND',
  description:
    'Book a nutrition consultation with Mary Clarice Lopez, RND through SeriousMD. Consultation fees range from ₱1,280 to ₱1,600.'
})
</script>

<template>
  <div>
    <section class="hero hero--inner">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="hero__eyebrow">Consultation</p>
          <h1>Book a Nutrition Consultation</h1>
          <p class="hero__lead">
            Schedule a consultation with Mary Clarice Lopez, RND through SeriousMD.
          </p>
          <PrimaryButton :href="bookingUrl" external>Book on SeriousMD</PrimaryButton>
        </div>
        <div class="card card--schedule">
          <p class="card__eyebrow">Consultation fee</p>
          <h2>{{ consultationFee }}</h2>
          <div class="hours-list">
            <div v-for="item in clinicHours" :key="item.day">
              <dt>{{ item.day }}</dt>
              <dd>{{ item.hours }}</dd>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="What to prepare"
            title="A few helpful details can make the consultation more productive."
          />
          <ul class="feature-list">
            <li v-for="item in preparationChecklist" :key="item">{{ item }}</li>
          </ul>
        </div>
        <PlaceholderMedia
          src="/images/rnd-checklist.jpg"
          alt="Nutrition planning checklist"
          label="Nutrition planning checklist placeholder"
          variant="landscape"
        />
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about booking and consultation details."
        />
        <FAQAccordion :items="faqs" />
      </div>
    </section>
  </div>
</template>
