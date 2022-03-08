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
            :alt="posts.category_name"
          />
        </picture>
      </div>
      <Back />

      <Loader v-if="$fetchState.pending" />

      <div class="profile-right" v-else>
        <h2>{{ posts.category_name }}</h2>
        <p>
          {{ posts.category_description }}
        </p>
      </div>
    </div>
    <FeaturedTags />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
    <Posts v-for="(post, index) in posts.data" :key="index" :post="post" />
    <pagination
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
  </div>
</template>

<script>
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
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'itachi category wise posts',
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

      this.$axios
        .$get(`category/${this.$route.params.category}?page=${page}`)
        .then((response) => {
          this.posts = response
        })
    },
  },
  // watch: {
  //   '$router.query': '$fetch',
  // },
  async fetch() {
    let page = this.$route.query.page ? this.$route.query.page : 1
    this.posts = await this.$axios.$get(
      `category/${this.$route.params.category}?page=${page}`
    )
  },
}
</script>