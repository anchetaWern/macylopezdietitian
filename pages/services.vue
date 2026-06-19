<script setup lang="ts">
const { consultationFee, includedServices, services } = useSiteContent()

const tiktokPosts = [
  {
    title: 'MAFBEX 2026',
    caption: 'One thing about me: I will never say no to a food expo. 🤍 Had so much fun exploring MAFBEX 2026 and trying flavors from different cultures all in one place! ✨',
    url: 'https://www.tiktok.com/@macythedietitian/video/7651586039995288840'
  },
  {
    title: 'Cherry Cucumber Salad',
    caption: 'Fiber intake doesn’t have to be complicated. Simple pairings like this can support digestion, satiety, and overall balance. 🍒',
    url: 'https://www.tiktok.com/@macythedietitian/video/7652968821166198024'
  },
  {
    title: 'What I do before a buffet',
    caption: 'Buffets are meant to be enjoyed, not survived. A little preparation helps you enjoy the experience without feeling overly stuffed afterwards.',
    url: 'https://www.tiktok.com/@macythedietitian/video/7651500910681525511'
  }
]

useSeoMeta({
  title: 'Nutrition Services | Mary Clarice Lopez, RND',
  description:
    'Explore nutrition services including nutrition counseling, nutrition analysis, content creation, and community/public health nutrition.'
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

    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="TikTok highlights"
          title="A few recent posts from Mary's TikTok."
          description="These posts give a quick feel for the kind of nutrition content she shares online."
          align="center"
        />
        <div class="grid grid--tiktok">
          <TikTokPreviewCard
            v-for="post in tiktokPosts"
            :key="post.url"
            :title="post.title"
            :caption="post.caption"
            :url="post.url"
          />
        </div>
      </div>
    </section>
  </div>
</template>
