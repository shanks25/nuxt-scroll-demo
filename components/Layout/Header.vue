<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
    <div class="container">
      <button class="toggle-drawer-btn">☰</button>
      <nuxt-link :to="{ name: 'index' }" class="navbar-brand"
        ><img src="../../assets/images/logo.webp" alt="DDmemes"
      /></nuxt-link>
      <button
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
              >Home
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>