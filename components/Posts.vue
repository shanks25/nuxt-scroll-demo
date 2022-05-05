<template>
  <div>
    <article>
      <header>
        <div class="post-section">
          <a class="thumb-icon">
            <picture>
              <img
                src="https://i.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o"
              />
            </picture>
          </a>
          <p class="post-cat">
            <a class="section"> Category Name </a>
          </p>

          <h1 class="post-title">
            <NuxtLink :to="{ name: 'posts-slug', params: { slug: post.id } }">
              {{ post.title }}
            </NuxtLink>
          </h1>
        </div>
      </header>
      <div class="article-content">
        <div class="image-post post-view">
          <picture>
            <img
              src="https://dbrjbx3wy4reb.cloudfront.net/memes/64/0SIfMfzCuVJFikgQXGchMRTgA12oZvgkrO1h7nnF.jpg"
              :class="{ fullHeight: $route.name == 'posts-slug' }"
            />
          </picture>
        </div>
      </div>
      <div class="post-meta">
        <div class="post-actions"></div>
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