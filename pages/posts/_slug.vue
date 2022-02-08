<template>
  <div class="container wrapper">
    <Sidebar />
    <main id="cm-main">
      <div class="row">
        <div class="col-sm-9">
          <div class="posts-container-parent hide-scrollbar">
            <SinglePostPage :post="post.data" />
          </div>
        </div>
        <Ads />
      </div>
    </main>
  </div>
</template>

<script>
export default {
    data() {
        return {
            post: {}
        }
    },
  async asyncData({ params, $axios }) {
    try {
      const post = await $axios.$get(`posts/${params.slug}`)
      return { post }
    } catch (e) {
      console.log(e.message);
    }
  },
}
</script>
