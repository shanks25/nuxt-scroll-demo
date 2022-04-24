<template>
  <div>
    <div class="profile-header">
      <div class="profile-image">
        <picture>
          <img
            :src="
              posts.category_image ||
              'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp'
            "
            :alt="posts.category_name"
          />
        </picture>
      </div>
      <Back />

      <div class="profile-right">
        <h2>{{ posts.category_name }}</h2>
        <p>
          {{ posts.category_description }}
        </p>
      </div>
    </div>
    <FeaturedTags />

    <pagination
      class="list-page-pagination"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
    <Loader v-if="loader" />

    <Posts
      v-for="(post, index) in posts.data"
      :key="index"
      :post="post"
      v-else
    />
    <pagination
      v-if="!loader"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
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
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'itachi category wise posts',
        },
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
        .$get(`category/${this.$route.params.category}?page=${page}`)
        .then((response) => {
          this.posts = response
          this.loader = false
        })
    },
  },
  watch: {
    $route(to, from) {
      this.loadPosts(to.query.page)
    },
  },
  async asyncData({ params, $axios, error, query = 1 }) {
    try {
      const posts = await $axios.$get(
        `category/${params.category}?page=${query.page}`
      )
      return { posts }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  // async fetch() {
  //   let page = this.$route.query.page ? this.$route.query.page : 1
  //   this.posts = await this.$axios.$get(
  //     `category/${this.$route.params.category}?page=${page}`
  //   )
  // },
}
</script>