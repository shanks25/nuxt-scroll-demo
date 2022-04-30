<template>
  <div>
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <template v-if="$fetchState.pending"> loading... </template>
          <Back v-else />
          <pagination
            class="list-page-pagination"
            :data="tags"
            @pagination-change-page="getResults"
          ></pagination>
          <Tag v-for="(tag, index) in tags.data" :key="index" :tag="tag" />
          <pagination
            class="list-page-pagination"
            :data="tags"
            @pagination-change-page="getResults"
            :limit="6"
          ></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Meme Tags-' + this.$route.params.page,
      link: this.paginationLinks,
      meta: [
        {
          description: 'Explore All tags available on DDmemes',
        },
      ],
    }
  },
  data() {
    return {
      tags: {},
    }
  },
  computed: {
    paginationLinks() {
      let nextPage = null
      let previousPage = null

      if (this.tags.links && this.tags.links.next) {
        nextPage = this.tags.meta.current_page + 1
        nextPage = `https://ddmemes.com/tags?page=${nextPage}`
      }

      if (this.tags.links && this.tags.links.prev) {
        previousPage = this.tags.meta.current_page - 1
        previousPage = `https://ddmemes.com/tags?page=${previousPage}`
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
  methods: {
    getResults(page = 1) {
      this.$router.push({
        name: 'tags-page',
        params: {
          page: page,
        },
      })
    },
  },
  async fetch() {
    this.tags = await this.$axios.$get(this.tagUrl(this.$route.params.page))
  },
}
</script>
