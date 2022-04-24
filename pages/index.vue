<template>
  <div>
    <FeaturedTags />
    <!-- :class="partialPagination" -->
    <pagination
      class="list-page-pagination"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
    <Loader v-if="loader" />
    <div v-else>
      <Posts v-for="(post, index) in posts.data" :key="index" :post="post" />
    </div>

    <pagination
      class="list-page-pagination"
      v-if="!loader"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
  </div>
</template>
<script src="" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
<script>
export default {
  data() {
    return {
      posts: {},
      loader: false,
    }
  },

  mounted() {
    // console.log()
  },
  methods: {
    getResults(page = 1, broswerBack = false) {
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
        .$get(this.postUrl(page))
        .then((response) => {
          this.posts = response
          this.loader = false
        })
        .then(() => {})
    },
  },
  async fetch() {
    let page = this.$route.query.page
    if (!page) {
      page = 1
    }
    this.posts = await this.$axios.$get(this.postUrl(page))
  },

  watch: {
    $route(to, from) {
      this.loadPosts(to.query.page)
    },
  },

  computed: {},
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
