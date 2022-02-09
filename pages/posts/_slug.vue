<template>
  <SinglePostPage :post="post.data" />
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },

  head() {
    return {
      title: this.post.title,
    }
  },

  
  async asyncData({ params, $axios }) {
    try {
      const post = await $axios.$get(`posts/${params.slug}`)
      return { post }
    } catch (e) {
      console.log(e.message)
    }
  },
}
</script>
