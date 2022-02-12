<template>
  <div>
    <Loader v-if="$fetchState.pending" />
    <h3 v-else>{{posts.keta}}</h3>
    <br />
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
import axios from 'axios'

export default {
  data() {
    return {
      posts: {},
    }
  },
  head() {
    return {
      title: this.posts.keta,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.posts.keta,
        },
      ],
    }
  },
  methods: {
    getResults(page = 1) {
      if (this.$route.query.page != page) {
        this.$router.replace({
          query: {
            page: page,
          },
        })
      }
      axios
        .get(
          `http://localhost:8000/api/tag/${this.$route.params.tag}?page=${page}`
        )
        .then((response) => {
          this.posts = response.data
        })
    },
  },
  // watch: {
  //   '$router.query': '$fetch',
  // },
  async fetch() {
    this.posts = await this.$axios.$get(
      `http://localhost:8000/api/tag/${this.$route.params.tag}?page=${this.$route.query.page}`
    )
  },
}
</script>