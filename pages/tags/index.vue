<template>
  <div>
    <Tag v-for="tag in tags.data" :key="tag.id" :tag="tag" />
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

  async fetch() {
    this.tags = await this.$axios.$get(
      `http://localhost:8000/api/tags`
    )
  },
}
</script>