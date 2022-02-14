<template>
  <div>
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <Back />
          <Tag v-for="tag in tags.data" :key="tag.id" :tag="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tags: {},
    }
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

  async fetch() {
    this.tags = await this.$axios.$get(`tags`)
  },
}
</script>