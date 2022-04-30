<template>
  <div class="tag-container">
    <ul class="tag-list">
      <li>
        <NuxtLink
          class="c-tag"
          :to="{ name: 'tag-tag', params: { tag: 'dog' } }"
        >
          Dog
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="c-tag"
          :to="{ name: 'tag-tag', params: { tag: 'star-wars' } }"
        >
          Star Wars
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="c-tag"
          :to="{ name: 'tag-tag', params: { tag: 'naruto' } }"
        >
          Naruto
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="c-tag"
          :to="{ name: 'tag-tag', params: { tag: 'batman' } }"
        >
          Batman
        </NuxtLink>
      </li>

      <li>
        <NuxtLink
          class="c-tag"
          :to="{ name: 'tag-tag', params: { tag: 'being-single' } }"
        >
          Being Single
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="c-tag"
          :to="{
            name: 'sections-category',
            params: { category: 'weebs' },
          }"
        >
          Weebs
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="c-tag"
          :to="{
            name: 'sections-category',
            params: { category: 'go-to-horny-jail' },
          }"
        >
          No Horny Bonk
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="c-tag"
          :to="{ name: 'tag-tag', params: { tag: 'harry-potter' } }"
        >
          Harry Potter
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script>
</script>