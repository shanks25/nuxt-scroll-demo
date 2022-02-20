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
              <nuxt-link :to="{ name: 'photos' }"
                ><i class="bi bi-lightning-charge-fill"></i> Photos</nuxt-link
              >
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
          <Section
            v-for="(category, index) in categories.data"
            :key="index"
            :category="category"
          />
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
  mounted() {},

  // async fetch() {
  //   this.categories = await this.$axios.$get(
  //     'http://localhost:3000/categories/categories.json'
  //   )
  // },
  async fetch() {
    this.categories = await this.$axios.$get(this.categoryUrl())
  },
}
</script>