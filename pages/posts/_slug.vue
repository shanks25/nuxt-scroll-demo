<template>
  <div>
    <Back />
    <SocialHead
      :title="post.data.title"
      :description="post.data.meta_desc"
      :image="post.data.image"
    />
    <Posts :post="post.data" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // loaded: false,
      post: {},
    }
  },

  head() {
    return {
      title: this.post.data.page_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.data.meta_desc,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://ddmemes.com/posts/${this.$route.params.slug}`,
        },
      ],
    }
  },
  mounted() {
    console.log(this.post.data.meta_desc)
  },
  async asyncData({ params, $axios, error }) {
    try {
      const post = await $axios.$get(`posts/${params.slug}`)
      return { post }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
}
</script>
