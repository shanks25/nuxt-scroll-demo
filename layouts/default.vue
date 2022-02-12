<template>
  <div>
    <LayoutHeader />
    <div class="container wrapper">
      <LayoutSidebar />
      <main id="cm-main">
        <div class="row">
          <div class="col-sm-9">
            <div class="posts-container-parent hide-scrollbar">
              <Nuxt />
            </div>
          </div>
          <LayoutAds />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'The Biggest Meme Library',
    titleTemplate: '%s | DD memes', // it will be everywhere %s will be replaced by the page title

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Biggest Meme Libray',
      },
    ],
  },
}
</script>