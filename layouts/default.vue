<template>
  <div>
    <LayoutHeader />
    <div class="container wrapper">
      <LayoutSidebar />
      <main id="cm-main">
        <div class="row">
          <div class="col-sm-9">
            <div class="posts-container-parent hide-scrollbar">
              <nuxt />
              <!-- <nuxt keep-alive /> -->
            </div>
          </div>
          <!-- <LayoutAds /> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>