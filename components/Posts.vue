<template>
  <div>
  

    <article >
      <header>
        <div class="post-section">
          <a class="thumb-icon" target="_blank" href="#.">
            <picture>
              <img
                src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100.jpg"
                :alt="post.categories.name"
              />
            </picture>
          </a>
          <p class="post-cat">
              <NuxtLink  class="section" :to="{ name: 'sections-category', params: { category:post.categories.slug } }" >
            {{post.categories.name }}</NuxtLink>
          </p>
          <div class="save-post">
            <a href="#."><i class="fa fa-bookmark-o" aria-hidden="true"></i></a>
          </div>
          <h1 class="post-title">
            <NuxtLink
              :to="{ name: 'posts-slug', params: { slug: post.slug } }"
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
       <div class="post-tag" style="margin-left:400px">
        <ul class="tag-list">
          <Tag v-for="tag in post.tags" :key="tag.id" :tag="tag"></Tag>
        </ul>
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
export default {
  props: {
    post: Object,
  },
}
</script>