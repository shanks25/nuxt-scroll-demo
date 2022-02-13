<template>
  <div>
    <FeaturedTags />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
    <Posts v-for="post in posts.data" :key="post.id" :post="post" />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: {},
    }
  },

  methods: {
    getResults(page = 1) {
     this.$router.push({name:'photos-page',params:{
         page:page
     }})
    },
  }, 
  async fetch() {

    this.posts = await this.$axios.$get(
      `posts?page=${this.$route.params.page}`
    )
  },
}
</script>
