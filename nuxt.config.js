const axios = require('axios')
require('dotenv').config()

export default {
  generate: {
    fallback: '404.html',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ddMemes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
      },
    ],

    script: [
      {
        src: '/main.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/css/bootstrap.min.css', // is works but my source code long css
    '@/assets/css/app.css',
    // '@/assets/css/font-awesome.min.css',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv',
    'vue-social-sharing/nuxt',
    // 'bootstrap-vue/nuxt',
  ],

  plugins: ['@/plugins/vueLaravelPagination', '@/plugins/helpers'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.LOCAL_BASE_URL || 'http://localhost:8000/api',
    progress: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  loading: {
    color: '#25aac0',
    height: '2px',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },
  /*   sitemap: {
    routes: async () => {
      let { data } = await axios.get('http://localhost:8000/api/sitemap-pages')
      let pages = data.data.map((v) => `/photos/${v.id}`)

      let tagData = await axios.get('http://localhost:8000/api/sitemap-tags')
      let tags = tagData.data.data.map((v) => `/tags/${v.slug}`)

      let categoryData = await axios.get(
        'http://localhost:8000/api/sitemap-categories'
      )
      let categorys = categoryData.data.data.map((v) => `/sections/${v.slug}`)
      return pages.concat(categorys, tags)
    },
  }, */
}
