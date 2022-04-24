import Vue from 'vue'
Vue.mixin({
  computed: {
    laravelMode() {
      if (process.env.JSON_MODE == 'laravel') {
        // this will determine to call apis from server
        return 1
      }
      // this will call .json files nuxt local static folder
      return 0
    },

    baseUrl() {
      if (process.env.APP_ENV == 'local') {
        return process.env.LOCAL_BASE_URL
      }
      return process.env.SERVER_BASE_URL
    },

    partialPagination() {
      const fullpaginatations = ['tags', 'photos']
      return !fullpaginatations.includes(this.$route.name)
        ? 'list-page-pagination'
        : ''
    },
  },
  methods: {
    // this will be determine based on value set in .env NUXT_JSON_MODE=posts,tags,categories
    localJsonNotAllowed(api) {
      let apis = process.env.NUXT_JSON_MODE.split(',')
      return !apis.includes(api)
    },

    postUrl(page = 1) {
      if (this.laravelMode || this.localJsonNotAllowed('posts')) {
        return this.baseUrl + `posts?page=${page}`
      }
      return process.env.NUXT_BASE_URL + `/json/posts/posts${page}.json`
    },

    categoryUrl() {
      if (this.laravelMode || this.localJsonNotAllowed('categories')) {
        return this.baseUrl + `categories`
      }
      return process.env.NUXT_BASE_URL + `/json/categories/categories.json`
    },

    photoUrl() {
      if (this.laravelMode || this.localJsonNotAllowed('photos')) {
        return this.baseUrl + `photos`
      }
      return process.env.NUXT_BASE_URL + `/json/photos/photos.json`
    },

    tagUrl(page = 1) {
      if (this.laravelMode || this.localJsonNotAllowed('tags')) {
        return this.baseUrl + `tags?page=${page}`
      }
      return process.env.NUXT_BASE_URL + `/json/tags/tags${page}.json`
    },
  },
})
