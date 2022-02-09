<template>
  <div>
    <article>
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
            <a class="section" target="_blank" href="#.">{{post.categories.name}}</a> .
            <span class="post-time">1h</span>
          </p>
          <div class="dropdown dot-dropdown">
            <button
              type="button"
              class="dropbtn dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
          </div>
          <div class="save-post">
            <a href="#."><i class="fa fa-bookmark-o" aria-hidden="true"></i></a>
          </div>
          <h1 class="post-title">
            <a href="#."
              >{{post.title}}</a
            >
          </h1>
        </div>
      </header>
      <div class="post-meta category-meta">
        <div class="post-actions">
          <div class="act-left">
            <ul class="btn-vote left">
              <li>
                <a class="up" href="#."><i class="bi bi-arrow-up"></i>2K</a>
              </li>
            </ul>

            <div class="next-post">
              <a href="javascript:void(0)">
                <span class="label-btn">Next Post</span>
                <span class="arrow-btn"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="article-content">
        <a href="#" class="" target="">
          <div class="image-post post-view">
            <picture>
              <img
                :src="post.image"
                :alt="post.ocr"
              />
            </picture>
          </div>
        </a>
      </div>
      <div class="post-tag">
        <ul class="tag-list">
          <Tag v-for="tag in post.tags" :key="tag.id" :tag="tag"></Tag>
        </ul>
      </div>
     
    </article>
  </div>
</template>

<script>
export default{
    props: {
        post:  Object,
    },
}
</script>