<template>
  <div class="container wrapper">
    <Sidebar />
    <main id="cm-main">
      <div class="row">
        <div class="col-sm-9">
          <div class="posts-container-parent hide-scrollbar">
            <FeaturedTags />
            <Post />
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
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch('http://localhost:8000/api/posts').then((res) =>
      res.json()
    )
  },
}
</script>
