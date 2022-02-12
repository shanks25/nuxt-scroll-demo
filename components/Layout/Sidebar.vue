<template>
  <div id="cm-drawer" class="cm-sidebar hide-scrollbar">
    <div class="cm-drawer-container">
      <section class="dr-list">
        <h4>Cmemes tag</h4>
        <ul>
          <li class="active-lt">
            <span class="dLeft">
              <nuxt-link :to="{ name: 'index' }"
                ><i class="bi bi-house-door-fill"></i>Hot</nuxt-link
              >
            </span>
            <span class="dright"
              ><a href="#."><i class="bi bi-three-dots"></i></a
            ></span>
          </li>

          <li>
            <span class="dLeft">
              <nuxt-link :to="{ name: 'tags' }"
                ><i class="bi bi-stopwatch"></i> Tags</nuxt-link
              >
            </span>
            <span class="dright"
              ><a href="#."><i class="bi bi-three-dots"></i></a
            ></span>
          </li>
          <li>
            <span class="dLeft">
              <a href="#."><i class="bi bi-lightning-charge-fill"></i> Pages</a>
            </span>
            <span class="dright"
              ><a href="#."><i class="bi bi-three-dots"></i></a
            ></span>
          </li>
        </ul>
      </section>

      <section class="dr-list">
        <h4>Section</h4>
        <ul>
          <li v-for="category in categories.data" :key="category.id">
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
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  async fetch() {
    this.categories = await fetch('http://localhost:8000/api/categories').then(
      (res) => res.json()
    )
  },
}
</script>