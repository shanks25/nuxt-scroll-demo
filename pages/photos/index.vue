<template>
  <div>
    <FeaturedTags />

    <header>
      <div class="post-section">
        <a class="thumb-icon" target="_blank" href="#.">
          <picture>
            <img
              src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100.jpg"
            />
          </picture>
        </a>

        <div class="save-post">
          <a href="#."><i class="fa fa-bookmark-o" aria-hidden="true"></i></a>
        </div>
        <h1 class="post-title">
       
        </h1>
      </div>
    </header>
    <div class="article-content">
      <a href="#" class="" target="">
        <div class="image-post post-view"></div>
      </a>
    </div>

    <div class="post-meta">
      <div class="post-actions">
        <div class="act-left">
           <pagination
            :data="posts"
            @pagination-change-page="getResults"
          ></pagination>
        </div>
      </div>
    </div>
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
      title: 'All pages',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:'All pages',
        },
        { hid: 'keywords', name: 'keywords', content: 'itachi category wise posts' },

      ],
    }
  },

  methods: {
    getResults(page = 1) {
      this.$router.push({
        name: 'photos-page',
        params: {
          page: page,
        },
      })
    },
  },
  async fetch() {
    this.posts = await this.$axios.$get(`photos`)
  },
}
</script>
