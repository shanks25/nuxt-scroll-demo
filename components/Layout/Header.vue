<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
    <div class="container">
      <button class="toggle-drawer-btn" @click="toggleDrawer()">☰</button>
      <nuxt-link
        :to="{ name: 'index' }"
        @click.native="hideDrawer()"
        class="navbar-brand"
        ><img src="../../assets/images/logo.webp" alt="DDmemes"
      /></nuxt-link>
      <button
        @click="togglePagesDrawer()"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              :to="{ name: 'index' }"
              class="nav-link active"
              aria-current="page"
              @click.native="hideDrawer()"
              >Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click.native="hideDrawer()"
              :to="{ name: 'contactus' }"
              class="nav-link active"
              aria-current="page"
              >Contact us
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click.native="hideDrawer()"
              :to="{ name: 'privacy-policy' }"
              class="nav-link active"
              aria-current="page"
              >Privacy policy
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              @click.native="hideDrawer()"
              :to="{ name: 'about-us' }"
              class="nav-link active"
              aria-current="page"
              >About us
            </nuxt-link>
          </li>
        </ul>
        <!-- <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      let x = document.getElementById('cm-drawer')
      if (x.style.width === '240px') {
        document.getElementById('cm-drawer').style.width = '0px'
        document.getElementById('cm-main').style.marginLeft = '0px'
      } else {
        document.getElementById('cm-drawer').style.width = '240px'
        document.getElementById('cm-main').style.marginLeft = '240px'
      }
    },
    togglePagesDrawer() {
      var element = document.getElementById('navbarSupportedContent')
      element.classList.toggle('show')
    },
    hideDrawer() {
      let x = document.getElementById('cm-drawer')

      if (screen.availWidth < 480) {
        document.getElementById('cm-drawer').style.width = '0px'
        document.getElementById('cm-main').style.marginLeft = '0px'

        var element = document.getElementById('navbarSupportedContent')
        element.classList.remove('show')
      }
    },
  },
  mounted() {},
}
</script>