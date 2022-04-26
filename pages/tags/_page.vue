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
      title: 'Meme Tags',
    }
  },
  data() {
    return {
      tags: {},
    }
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
