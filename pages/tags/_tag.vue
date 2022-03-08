<template>
  <div>
    <Back />
    <Loader v-if="$fetchState.pending" />
    <h3 v-else>{{ posts.keta }}</h3>

    <br />
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
    }
  },
  head() {
    return {
      title: this.posts.keta,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.posts.keta,
        },
        { hid: 'keywords', name: 'keywords', content: 'itachi single tag' },
      ],
    }
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
      this.$axios
        .$get(`tag/${this.$route.params.tag}?page=${page}`)
        .then((response) => {
          this.posts = response
        })
    },
  },

  async fetch() {
    let page = this.$route.query.page ? this.$route.query.page : 1
    this.posts = await this.$axios.$get(
      `tag/${this.$route.params.tag}?page=${page}`
    )
  },
}
</script>