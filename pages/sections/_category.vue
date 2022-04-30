<template>
  <div>
    <div class="profile-header">
      <div class="profile-image">
        <picture>
          <img
            :src="
              posts.category_image ||
              'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp'
            "
            :alt="posts.category_name"
          />
        </picture>
      </div>
      <Back />

      <div class="profile-right">
        <h2>{{ posts.category_name }}</h2>
        <p>
          {{ posts.category_description }}
        </p>
      </div>
    </div>
    <div class="tag-container">
      <ul class="tag-list">
        <FeaturedTags v-for="tag in tags" :key="tag.id" :tag="tag" />
      </ul>
    </div>

    <pagination
      class="list-page-pagination"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
    ></pagination>
    <Loader v-if="loader" />
    <template v-else>
      <Posts v-for="(post, index) in posts.data" :key="index" :post="post" />
      <SocialHead
        :title="posts.keta"
        :description="posts.category_name"
        :image="posts.data[0].image"
      />
    </template>
    <pagination
      v-if="!loader"
      :data="posts"
      @pagination-change-page="getResults"
      :limit="6"
      class="list-page-pagination"
    ></pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {},
      tags: [],
      loader: false,
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
  mounted() {
    console.log(this.posts)
  },

  methods: {
    getResults(page = 1) {
      if (this.$route.query.page != page) {
        this.$router.push({
          query: {
            page: page,
          },
        })
      }
    },

    loadPosts(page) {
      this.loader = true
      this.$axios
        .$get(`category/${this.$route.params.category}?page=${page}`)
        .then((response) => {
          this.posts = response
          this.loader = false
        })
    },
  },
  watch: {
    $route(to, from) {
      this.loadPosts(to.query.page)
    },
  },
  async asyncData({ params, $axios, error }) {
    try {
      const [posts, tags] = await Promise.all([
        $axios.get(`category/${params.category}`),
        $axios.get(
          'http://localhost:3000' + `/json/featuredTags/${params.category}.json`
        ),
      ])
      // const posts = await $axios.$get(`category/${params.category}?page=1`)
      return {
        posts: posts.data,
        tags: tags.data.data,
      }
    } catch (e) {
      console.log(e)
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  /*   async fetch() {
    let apiUrl = this.featuredTagsUrl(this.$route.params.category)
    console.log(apiUrl)
    this.$axios
      .$get(apiUrl)
      .then((response) => {
        this.tags = response.data
      })
      .catch(() => {})
  }, */
}
</script>