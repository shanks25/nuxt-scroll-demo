<template>
  <div>
    <FeaturedTags />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>

    <Posts v-for="post in posts.data" :key="post.id" :post="post" />

    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      posts: {},
    }
  },
  async mounted() {
    let { data } = await axios.get('http://localhost:8000/api/sitemap-pages')
    let pages = data.data.map((v) => `/photos/${v.id}`)

    let tagData = await axios.get('http://localhost:8000/api/sitemap-tags')
    let tags = tagData.data.data.map((v) => `/tags/${v.slug}`)
    console.log(tags)
  },

  methods: {
    getResults(page = 1) {
      if (this.$route.query.page != page) {
        this.$router.replace({
          query: {
            page: page,
          },
        })
      }
      this.$axios.$get('posts?page=' + page).then((response) => {
        this.posts = response
      })
    },
  },
  async fetch() {
    this.posts = await this.$axios.$get(`posts?page=${this.$route.query.page}`)
  },
}
</script>
