<template>
  <li>
    <NuxtLink
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
}
</script>