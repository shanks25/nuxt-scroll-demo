<template>
  <div>
    <LayoutHeader />
    <div class="container wrapper">
      <Sidebar />
      <main id="cm-main">
        <div class="row">
          <div class="col-sm-9">
            <div class="posts-container-parent hide-scrollbar">
              <Nuxt />
            </div>
          </div>
          <Ads />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>