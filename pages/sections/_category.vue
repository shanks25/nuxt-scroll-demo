<template>
  <div class="section_page">
    <div class="profile-header">
      <div class="profile-image">
        <picture>
          <img
            src="https://i.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o"
          />
        </picture>
      </div>
      <Back />

      <div class="profile-right">
        <h2>Category name</h2>
      </div>
    </div>
    <div class="tag-container"></div>
    <Posts v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    }
  },

  async asyncData({ params, $axios, error }) {
    try {
      const posts = await $axios.$get(`https://api.nuxtjs.dev/posts`)
      return { posts }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },

  // async fetch() {
  //   this.$axios
  //     .$get('https://api.nuxtjs.dev/posts')
  //     .then((response) => {
  //       this.posts = response
  //     })
  //     .catch(() => {})
  // },
}
</script>