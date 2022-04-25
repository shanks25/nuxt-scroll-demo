<template>
  <div>
    <FeaturedTags />
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
  head() {
    return {
      title: 'Memes',
    }
  },
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
}
</script>
