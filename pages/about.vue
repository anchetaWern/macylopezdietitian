<script setup lang="ts">
const { credentials, experiences, values } = useSiteContent()

useSeoMeta({
  title: 'About Mary Clarice Lopez, RND',
  description:
    'Learn about Mary Clarice Lopez, a Registered Nutritionist-Dietitian and Cum Laude graduate of the Polytechnic University of the Philippines.'
})
</script>

<template>
  <div>
    <section class="hero hero--inner">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="hero__eyebrow">About Mary</p>
          <h1>About Mary Clarice Lopez</h1>
          <p class="hero__lead">
            Mary Clarice Lopez is a Registered Nutritionist-Dietitian and Cum Laude graduate of the Polytechnic University of the Philippines.
          </p>
          <p class="hero__support">
            She provides nutrition counseling, nutrition education, meal planning, and nutrient counting for clients with various health goals and therapeutic nutrition needs.
          </p>
        </div>
        <PlaceholderMedia
          src="/images/rnd-about.jpg"
          alt="Mary Clarice Lopez, dietitian portrait"
          label="Professional dietitian portrait placeholder"
        />
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="Credentials"
            title="A grounded professional background with a practical approach."
          />
          <ul class="pill-list">
            <li v-for="credential in credentials" :key="credential">{{ credential }}</li>
          </ul>
        </div>
        <div class="card card--statement">
          <p>
            Mary’s approach focuses on practical, personalized, and evidence-based nutrition care. She helps clients understand their nutrition needs and build realistic habits that fit their lifestyle, preferences, and health goals.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <SectionHeading
          eyebrow="Professional experience"
          title="Experience across counseling, education, analysis, and wellness support."
        />
        <div class="grid grid--experience">
          <ExperienceCard
            v-for="experience in experiences"
            :key="`${experience.organization}-${experience.role}`"
            :role="experience.role"
            :organization="experience.organization"
            :points="experience.points"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Values"
          title="Care that feels supportive, clear, and sustainable."
          align="center"
        />
        <div class="grid grid--values">
          <article v-for="value in values" :key="value" class="card card--value">
            <h3>{{ value }}</h3>
          </article>
        </div>
      </div>
    </section>

    <CTASection
      title="Ready to work with Mary?"
      description="Book a consultation for personalized nutrition guidance that fits your goals and daily life."
      button-text="Book a Consultation"
    />
  </div>
</template>
