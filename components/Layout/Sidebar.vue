<template>
  <div id="cm-drawer" class="cm-sidebar hide-scrollbar">
    <div class="cm-drawer-container">
      <section class="dr-list">
        <!-- <h4>Pages</h4> -->
        <ul>
          <li :class="{ 'active-lt': $route.name == 'index' }">
            <span class="dLeft">
              <nuxt-link
                @click.native="checkMobileView()"
                :to="{ name: 'index' }"
                ><i class="bi bi-house-door-fill"></i>Hot</nuxt-link
              >
            </span>
          </li>

          <li :class="{ 'active-lt': $route.name == 'tags' }">
            <span class="dLeft">
              <nuxt-link
                @click.native="checkMobileView()"
                :to="{ name: 'tags' }"
                ><i class="bi bi-stopwatch"></i> Tags</nuxt-link
              >
            </span>
          </li>
          <li :class="{ 'active-lt': $route.name == 'photos' }">
            <span class="dLeft">
              <nuxt-link
                @click.native="checkMobileView()"
                :to="{ name: 'photos' }"
                ><i class="bi bi-lightning-charge-fill"></i> Photos</nuxt-link
              >
            </span>
          </li>
        </ul>
      </section>

      <section class="dr-list">
        <h4>Section</h4>
        <ul>
          <Section
            keep-alive
            v-for="(category, index) in categories.data"
            :key="index"
            :category="category"
            v-on:click.native="checkMobileView()"
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
  methods: {
    checkMobileView() {
      if (screen.availWidth < 480) {
        document.getElementById('cm-drawer').style.setProperty('width', '0px')
      }
    },
  },

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