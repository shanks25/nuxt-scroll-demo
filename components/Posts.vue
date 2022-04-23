<template>
  <div>
    <article>
      <header>
        <div class="post-section">
          <NuxtLink
            class="thumb-icon"
            :to="{
              name: 'sections-category',
              params: { category: post.categories.slug },
            }"
          >
            <picture>
              <img
                src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp"
                :alt="post.categories.name"
              />
            </picture>
          </NuxtLink>
          <p class="post-cat">
            <NuxtLink
              class="section"
              :to="{
                name: 'sections-category',
                params: { category: post.categories.slug },
              }"
            >
              {{ post.categories.name }}
            </NuxtLink>
          </p>
          <div class="save-post">
            <a href="#."><i class="fa fa-bookmark-o" aria-hidden="true"></i></a>
          </div>
          <h1 class="post-title">
            <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.slug } }">
              {{ post.title }}
            </NuxtLink>
          </h1>
        </div>
      </header>
      <div class="article-content">
        <div class="image-post post-view">
          <picture>
            <img
              :src="post.image"
              :alt="post.ocr"
              :class="{ fullHeight: $route.name == 'posts-slug' }"
            />
          </picture>
        </div>
      </div>
      <div class="post-tag" style="margin-left: 400px">
        <ShareNetwork
          v-for="network in networks"
          :network="network.network"
          v-on:click="crawl()"
          :key="network.network"
          :style="{ backgroundColor: network.color }"
          :url="sharing.url"
          :title="post.title"
          :description="post.description"
          class="social-share"
          @open="open(network.network)"
        >
          <i :class="network.icon"></i>
          <span>{{ network.name }}</span>
        </ShareNetwork>
        <ul class="tag-list">
          <Tag v-for="(tag, index) in post.tags" :key="index" :tag="tag"></Tag>
        </ul>
      </div>
      <div class="post-meta">
        <div class="post-actions">
          <div class="act-left">
            <ul class="btn-vote left">
              <li>
                <a class="up" href="#."
                  ><i class="bi bi-arrow-up"></i>{{ post.post_upvotes }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      sharing: {
        url: process.env.NUXT_SERVER_BASE_URL + '/posts/' + this.post.slug,
        title: this.post.title,
        description: this.post.ocr,
      },
      networks: [
        {
          network: 'facebook',
          name: 'Facebook',
          icon: 'fab fah fa-lg fa-facebook-f',
          color: '#1877f2',
        },
        {
          network: 'pinterest',
          name: 'Pinterest',
          icon: 'fab fah fa-lg fa-pinterest',
          color: '#bd081c',
        },
        {
          network: 'telegram',
          name: 'Telegram',
          icon: 'fab fah fa-lg fa-telegram-plane',
          color: '#0088cc',
        },
        {
          network: 'tumblr',
          name: 'Tumblr',
          icon: 'fab fah fa-lg fa-tumblr',
          color: '#35465c',
        },
        {
          network: 'twitter',
          name: 'Twitter',
          icon: 'fab fah fa-lg fa-twitter',
          color: '#1da1f2',
        },
        {
          network: 'whatsapp',
          name: 'Whatsapp',
          icon: 'fab fah fa-lg fa-whatsapp',
          color: '#25d366',
        },
      ],
    }
  },
  methods: {
    async open(network = 'no network') {
      // console.log(network)
      try {
        await this.$axios.post('/social-shares', {
          post_title: this.post.title,
          network,
        })
      } catch (e) {}
    },
    crawl() {
      return true
    },
  },
}
</script>