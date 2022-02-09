<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- {{posts}} -->
    <pagination :data="posts" @pagination-change-page="getResults"></pagination>
  
    <article v-for="post in posts.data" :key="post.id">
      <header>
        <div class="post-section">
          <a class="thumb-icon" target="_blank" href="#.">
            <picture>
              <img
                src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100.jpg"
                loading="lazy"
              />
            </picture>
          </a>
          <p class="post-cat">
            <a class="section" target="_blank" href="#.">Animals</a> .
            <span class="post-time">3h</span>
          </p>
          <div class="save-post">
            <a href="#."><i class="fa fa-bookmark-o" aria-hidden="true"></i></a>
          </div>
          <h1 class="post-title">
            <NuxtLink
              :to="{ name: 'posts-slug', params: { slug: post.slug } }"
              target="_blank"
              >{{ post.title }}</NuxtLink
            >
          </h1>
        </div>
      </header>
      <div class="article-content">
        <a href="#" class="" target="">
          <div class="image-post post-view">
            <picture>
              <img :src="post.image" :alt="post.ocr" />
            </picture>
          </div>
        </a>
      </div>
      <div class="post-meta">
        <div class="post-actions">
          <div class="act-left">
            <ul class="btn-vote left">
              <li>
                <a class="up" href="#."><i class="bi bi-arrow-up"></i>2840</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>

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
    // Our method to GET results from a Laravel endpoint
    getResults(page = 1) {
      axios
        .get('http://localhost:8000/api/posts?page=' + page)
        .then((response) => {
          this.posts = response.data
        })
    },
  },
  async fetch() {
    this.posts = await fetch('http://localhost:8000/api/posts').then((res) =>
      res.json()
    )
  },
}
</script>