<template>
  <div class="photo_bx">
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <Back v-if="!$fetchState.pending" />

          <pagination
            :data="posts"
            @pagination-change-page="getResults"
          ></pagination>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      posts: {},
    }
  },
  head() {
    return {
      title: 'All pages',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All pages',
        },
      ],
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
    this.posts = await this.$axios.$get(this.photoUrl())
  },
}
</script>
