export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: (titleChunk) =>
        titleChunk ? `${titleChunk} | Mary Clarice Lopez, RND` : 'Mary Clarice Lopez, RND',
      meta: [
        {
          name: 'theme-color',
          content: '#f7f2e8'
        }
      ]
    }
  }
})
