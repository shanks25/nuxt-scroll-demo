<template>
  <div>
    <h1 class="tag_head">{{ posts.desc }} <Back /></h1>

    <!-- <Loader v-if="$fetchState.pending" /> -->
    <br />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
      class="list-page-pagination"
    ></pagination>

    <Loader v-if="loader" />
    <template v-else>
      <Posts v-for="(post, index) in posts.data" :key="index" :post="post" />
      <SocialHead
        :title="posts.keta"
        :description="posts.desc"
        :image="posts.data[0].image"
      />
    </template>

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
      link: this.paginationLinks,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.posts.desc,
        },
      ],
    }
  },
  computed: {
    paginationLinks() {
      let nextPage = null
      let previousPage = null
      if (this.posts.links && this.posts.links.next) {
        nextPage = this.posts.meta.current_page + 1
        nextPage = `https://ddmemes.com/tag/${this.$route.params.tag}?page=${nextPage}`
      }

      if (this.posts.links && this.posts.links.prev) {
        previousPage = this.posts.meta.current_page - 1
        previousPage = `https://ddmemes.com/tag/${this.$route.params.tag}?page=${previousPage}`
      }

      const nextUrl = {
        rel: 'next',
        href: nextPage,
      }
      const previousUrl = {
        rel: 'prev',
        href: previousPage,
      }

      const canonical = {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://ddmemes.com/tag/${this.$route.params.tag}`,
      }
      let current_page = this.$route.query.page
      if (current_page) {
        canonical.href = `https://ddmemes.com/tag/${this.$route.params.tag}?page=${current_page}`
      }
      return [canonical, nextUrl, previousUrl].filter(({ href }) => !!href)
    },
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
  watch: {
    $route(to, from) {
      this.loadPosts(to.query.page)
    },
  },
  async asyncData({ params, $axios, error, query }) {
    try {
      if (!query.page) {
        query.page = 1
      }
      const posts = await $axios.$get(`tag/${params.tag}?page=${query.page}`)
      return { posts }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  // async fetch() {
  //   let page = this.$route.query.page ? this.$route.query.page : 1
  //   this.posts = await this.$axios.$get(
  //     `tag/${this.$route.params.tag}?page=${page}`
  //   )
  // },
}
</script>