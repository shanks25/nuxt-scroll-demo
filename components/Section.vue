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
          src="https://i.picsum.photos/id/372/200/200.jpg?hmac=QFGGlcWGNWBK0oDD1jghIaCvGIFU5iJJcd2VhF5oH6o"
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