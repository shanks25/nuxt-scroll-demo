<template>
  <li>
    <NuxtLink
      class="c-tag"
      :to="{ name: 'tag-tag', params: { tag: tag.slug } }"
    >
      {{ tag.name }}
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: ['tag'],
}
</script>