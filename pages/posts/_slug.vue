<template>
  <div>
    <Back />
    <SocialHead
      :title="post.data.title"
      :description="post.data.ocr"
      :image="post.data.image"
    />
    <Posts :post="post.data" />
  </div>
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
      title: this.post.data.ocr ? this.post.data.ocr : this.post.data.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.data.ocr
            ? this.post.data.ocr
            : this.post.data.title,
        },
        { hid: 'keywords', name: 'keywords', content: 'itachi single post' },
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
