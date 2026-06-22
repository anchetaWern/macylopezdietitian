<script setup lang="ts">
const { audiences, consultationSteps, services, trustHighlights } = useSiteContent()

useSeoMeta({
  title: 'Mary Clarice Lopez, RND | Registered Nutritionist-Dietitian',
  description:
    'Book a consultation with Mary Clarice Lopez, RND for personalized nutrition counseling, meal planning, diabetes education, weight management, pediatric nutrition, and women’s wellness.'
})
</script>

<template>
  <div>
    <section class="hero hero--home">
      <div class="container hero__grid">
        <div class="hero__content">
          <p class="hero__eyebrow">Warm, practical nutrition care</p>
          <h1>Mary Clarice Lopez, RND</h1>
          <p class="hero__lead">
            Registered Nutritionist-Dietitian providing personalized nutrition counseling, education, and meal planning for individuals and families.
          </p>
          <p class="hero__support">
            Helping clients make practical, evidence-based nutrition changes for better health, wellness, and everyday living.
          </p>
          <div class="button-row">
            <PrimaryButton href="https://seriousmd.com/doc/mary-clarice-lopez" external>Book a Consultation</PrimaryButton>
            <PrimaryButton to="/services" variant="outline">View Services</PrimaryButton>
          </div>
        </div>
        <PlaceholderMedia
          src="/images/mary-clarice-portrait-720.jpg"
          srcset="/images/mary-clarice-portrait-480.jpg 480w, /images/mary-clarice-portrait-720.jpg 720w, /images/mary-clarice-portrait-960.jpg 960w"
          webp-srcset="/images/mary-clarice-portrait-480.webp 480w, /images/mary-clarice-portrait-720.webp 720w, /images/mary-clarice-portrait-960.webp 960w"
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 540px"
          width="720"
          height="1080"
          alt="Mary Clarice Lopez smiling outdoors"
          label="Portrait of Mary Clarice Lopez"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Why clients choose her"
          title="Patient-centered nutrition guidance rooted in everyday life."
          description="Clear advice, practical habits, and personalized support for a range of health needs and life stages."
          align="center"
        />
        <div class="grid grid--trust">
          <TrustCard v-for="item in trustHighlights" :key="item" :text="item" />
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <SectionHeading
          eyebrow="Services preview"
          title="Nutrition support tailored to real goals and real routines."
          description="Explore focused guidance for chronic disease support, women’s health, family nutrition, and sustainable wellness."
        />
        <div class="grid grid--services">
          <ServiceCard v-for="service in services" :key="service.title" :title="service.title" :description="service.description" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          <SectionHeading
            eyebrow="Who she works with"
            title="Support for individuals and families across different health needs."
            description="Every plan is shaped around the client’s goals, food preferences, and day-to-day life."
          />
          <ul class="pill-list">
            <li v-for="audience in audiences" :key="audience">{{ audience }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="container">
        <SectionHeading
          eyebrow="How consultation works"
          title="A simple path from booking to personalized guidance."
          align="center"
        />
        <div class="steps-grid">
          <article v-for="(step, index) in consultationSteps" :key="step" class="card card--step">
            <p class="step-number">0{{ index + 1 }}</p>
            <p>{{ step }}</p>
          </article>
        </div>
      </div>
    </section>

    <CTASection
      title="Start your nutrition journey with personalized guidance."
      description="Book a consultation and take the next step toward practical, evidence-based nutrition care."
      button-text="Book Consultation"
    />
  </div>
</template>
