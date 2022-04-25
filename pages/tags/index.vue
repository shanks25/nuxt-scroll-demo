<template>
  <div class="">
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <div class="tags_top">
            <Back v-if="!$fetchState.pending" />
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.tags.keta,
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