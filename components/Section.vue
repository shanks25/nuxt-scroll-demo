<template>
  <li>
    <NuxtLink
      @click.native="checkMobileView()"
      :to="{
        name: 'sections-category',
        params: { category: category.slug },
      }"
    >
      <span class="dLeft">
        <img
          :src="
            category.image
              ? category.image
              : 'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557391851.3248_Za4UdA_100x100wp.webp'
          "
          :alt="category.name"
          class="thumb-icon"
        />{{ category.name }}
      </span>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    checkMobileView() {
      if (
        /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
          navigator.userAgent
        ) ||
        screen.availWidth < 480
      ) {
        document.getElementById('cm-drawer').style.setProperty('width', '0px')
      }
    },
  },
  mounted() {
    /*     document
      .getElementById('category')
      .setAttribute(
        'src',
        this.post.categories.image ||
          'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557376304.186_U5U7u5_100x100wp.webp'
      ) */
  },
}
</script>