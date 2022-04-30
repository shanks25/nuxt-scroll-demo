<template>
  <div>
    <landingFeatured />

    <template>
      <Loader v-if="$fetchState.pending" />
      <Back v-else />
    </template>

    <pagination
      class="list-page-pagination"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>

    <Posts v-for="(post, index) in posts.data" :key="index" :post="post" />
    <pagination
      class="list-page-pagination"
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
  computed: {
    paginationLinks() {
      let nextPage = null
      let previousPage = null

      if (this.posts.links && this.posts.links.next) {
        nextPage = this.posts.meta.current_page + 1
        nextPage = `https://ddmemes.com/photos/${nextPage}`
      }

      if (this.posts.links && this.posts.links.prev) {
        previousPage = this.posts.meta.current_page - 1
        previousPage = `https://ddmemes.com/photos/${previousPage}`
      }
      const nextUrl = {
        rel: 'next',
        href: nextPage,
      }
      const previousUrl = {
        rel: 'prev',
        href: previousPage,
      }

      return [nextUrl, previousUrl].filter(({ href }) => !!href)
    },
  },
  head() {
    return {
      title: `Photos-${this.$route.params.page}`,
      link: this.paginationLinks,
    }
  },
}
</script>
