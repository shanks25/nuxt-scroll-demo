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
export default {
  data() {
    return {
      posts: {},
      loader: false,
    }
  },

  mounted() {},
  methods: {
    getResults(page = 1) {
      if (this.$route.query.page != page) {
        this.$router.replace({
          query: {
            page: page,
          },
        })
      }
      this.$axios.$get(this.postUrl(page)).then((response) => {
        this.posts = response
      })
      window.scrollTo(0, 0)
    },
  },
  async fetch() {
    let page = this.$route.query.page
    if (!page) {
      page = 1
    }
    this.posts = await this.$axios.$get(this.postUrl(page))
  },

  /*   async fetch() {
    let page = this.$route.query.page
    if (!page) {
      page = 1
    }
    this.posts = await this.$axios.$get(
      `http://localhost:3000/ksr/posts${page}.json`
    )
  }, */

  /* this code is in getResult method
        this.$axios
        .$get(`http://localhost:3000/ksr/posts${page}.json`)
        .then((response) => {
          this.posts = response
        }) */
}
</script>
