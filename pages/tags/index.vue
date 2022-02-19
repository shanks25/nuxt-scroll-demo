<template>
  <div>
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <Back />
          <pagination
            :data="tags"
            @pagination-change-page="getResults"
            :limit="6"
          ></pagination>
          <Tag v-for="tag in tags.data" :key="tag.id" :tag="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tagUrl } from '@/helpers'

export default {
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

  head() {
    return {
      title: this.tags.keta,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tags.keta,
        },
        { hid: 'keywords', name: 'keywords', content: 'itachi all tags' },
      ],
    }
  },

  /*   async fetch() {
    this.tags = await this.$axios.$get('http://localhost:3000/tags.json')
  }, */

  async fetch() {
    this.tags = await this.$axios.$get(tagUrl())
  },
}
</script>