<template>
  <Posts :post="post.data" />
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
      title: this.post.data.ocr ? this.post.data.ocr : this.post.data.title ,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.data.ocr ? this.post.data.ocr : this.post.data.title ,
        },
      ],
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
