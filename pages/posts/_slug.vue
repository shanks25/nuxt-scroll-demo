<template>
  <div>
    <Back />

    <Posts :post="post" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },

  // async asyncData({ params, $axios, error }) {
  //   try {
  //     const post = await $axios.$get(`https://api.nuxtjs.dev/posts/1`)
  //     return { post }
  //   } catch (e) {
  //     error({ statusCode: 404, message: 'Post not found' })
  //   }
  // },

  async fetch() {
    this.$axios
      .$get('https://api.nuxtjs.dev/posts/1')
      .then((response) => {
        this.post = response
      })
      .catch(() => {})
  },
}
</script>
