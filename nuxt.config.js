const axios = require('axios')

export default {
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
    '@/assets/css/app.css',
    // '@/assets/css/font-awesome.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  plugins: ['@/plugins/vueLaravelPagination'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8000/api/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },

  sitemap: {
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
  },
}
