<template>
  <div>
    <div>
      <Posts v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    }
  },

  methods: {},
  async fetch() {
    let page = this.$route.query.page
    if (!page) {
      page = 1
    }
    this.posts = await this.$axios.$get('https://api.nuxtjs.dev/posts')
  },
}
</script>
