<template>
  <div class="">
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <div class="tags_top">
            <template v-if="$fetchState.pending"> loading... </template>
            <Back v-else />
            <pagination
              :data="tags"
              @pagination-change-page="getResults"
            ></pagination>
            <ul class="tags_bx">
              <Tag v-for="(tag, index) in tags.data" :key="index" :tag="tag" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: {},
    }
  },
  mounted() {
    // console.log(this.$route)
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

  head() {
    return {
      title: 'All Tags',
      link: this.paginationLinks,
      meta: [
        {
          description: 'Explore All tags available on DDmemes',
        },
      ],
    }
  },

  /*   async fetch() {
    this.tags = await this.$axios.$get('http://localhost:3000/tags.json')
  }, */

  async fetch() {
    this.tags = await this.$axios.$get(this.tagUrl())
  },
}
</script>