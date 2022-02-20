<template>
  <div>
    <FeaturedTags />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
    <Posts v-for="(post, index) in posts.data" :key="index" :post="post" />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
  </div>
</template>

<script>
import { postUrl } from '@/helpers'

export default {
  data() {
    return {
      posts: {},
    }
  },

  methods: {
    getResults(page = 1) {
      this.$router.push({
        name: 'photos-page',
        params: {
          page: page,
        },
      })
    },
  },
  async fetch() {
    let page = this.$route.params.page
    this.posts = await this.$axios.$get(this.postUrl(page))
  },
}
</script>
