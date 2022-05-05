<template>
  <div id="cm-drawer" class="cm-sidebar hide-scrollbar">
    <div class="cm-drawer-container">
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
    this.categories = await this.$axios.$get(
      'https://dev.celestialmemes.com/api/categories'
    )
  },
}
</script>