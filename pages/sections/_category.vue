<template>
  <div>
    <div class="profile-header">
      <div class="profile-image">
        <picture>
          <source
            srcset="
              https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp
            "
            type="image/webp"
          />
          <img
            src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100.jpg"
          />
        </picture>
      </div>
    <Loader v-if="$fetchState.pending" />

      <div class="profile-right" v-else>
        <h2>{{posts.keta}}</h2>
        <p>
          Explore funny memes, GIFs and videos on 9GAG. See top memes and
          hilarious videos about funny animals, human fails, comedians, stand-up
          comedy and more.
        </p>
      </div>
    </div>
    <FeaturedTags />
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
        .get(`http://localhost:8000/api/category/${this.$route.params.category}?page=${page}`)
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
      `http://localhost:8000/api/category/${this.$route.params.category}?page=${this.$route.query.page}`
    )
  },
}
</script>