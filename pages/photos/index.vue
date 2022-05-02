<template>
  <div class="photo_bx">
    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
          <template v-if="$fetchState.pending"> loading... </template>
          <Back v-else />

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
          content: 'Explore all pages available on DDmemes',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://ddmemes.com/photos',
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
