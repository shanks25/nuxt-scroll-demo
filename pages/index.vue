<template>
  <div>
    <FeaturedTags />
    <Post />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    }
  },

  async fetch() {
    this.posts = await fetch('http://localhost:8000/api/posts').then((res) =>
      res.json()
    )
  },
}
</script>
