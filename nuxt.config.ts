// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  devtools: { enabled: false },
  pages: true,
  css: ['~/assets/css/main.css', '~/assets/fonts/RuslanDisplay.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
    },
  },

  $development: {
    app: {
      head: {

      }
    }
  },

  $production: {
    app: {
      head: {
      }
    }
  },

  modules: ['@nuxt/image']
})