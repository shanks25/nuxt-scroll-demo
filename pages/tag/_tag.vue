<template>
  <div>
    <Back />
    <Loader v-if="$fetchState.pending" />
    <h1 v-else>{{ posts.keta }}</h1>

    <br />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
      class="list-page-pagination"
    ></pagination>

    <Loader v-if="loader" />

    <Posts
      v-for="(post, index) in posts.data"
      :key="index"
      :post="post"
      v-else
    />

    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
      v-if="!loader"
      class="list-page-pagination"
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
        this.$router.push({
          query: {
            page: page,
          },
        })
      }
    },

    loadPosts(page) {
      this.loader = true
      this.$axios
        .$get(`tag/${this.$route.params.tag}?page=${page}`)
        .then((response) => {
          this.posts = response
          this.loader = false
        })
    },
  },
  mounted() {
    console.log(this.$route)
  },
  watch: {
    $route(to, from) {
      this.loadPosts(to.query.page)
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