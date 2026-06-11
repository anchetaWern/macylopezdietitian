<script setup lang="ts">
const { consultationFee, includedServices, services } = useSiteContent()

useSeoMeta({
  title: 'Nutrition Services | Mary Clarice Lopez, RND',
  description:
    'Explore nutrition services including diabetes education, pediatric nutrition, geriatric nutrition, weight management, women’s nutrition, and pre and postpartum nutrition.'
})
</script>

<template>
  <div>
    <section class="hero hero--inner">
      <div class="container hero__grid hero__grid--compact">
        <div class="hero__content">
          <p class="hero__eyebrow">Nutrition services</p>
          <h1>Nutrition Services</h1>
          <p class="hero__lead">
            Personalized nutrition counseling and education for individuals and families with different health needs, life stages, and wellness goals.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Services grid"
          title="Guidance shaped around your health priorities and everyday routines."
        />
        <div class="grid grid--services">
          <article v-for="service in services" :key="service.title" class="card card--service-detail">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="What may be included"
            title="Consultation support may cover education, planning, and practical next steps."
          />
          <ul class="feature-list">
            <li v-for="item in includedServices" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="card card--fee">
          <p class="card__eyebrow">Consultation fee</p>
          <h2>{{ consultationFee }}</h2>
          <p>Final fees may vary depending on consultation type and booking details.</p>
          <PrimaryButton href="https://seriousmd.com/doc/mary-clarice-lopez" external>Book via SeriousMD</PrimaryButton>
        </div>
      </div>
    </section>
  </div>
</template>
