let postUrl = (page = 1) => {
  if (laravelMode()) {
    return baseUrl() + `posts?page=${page}`
  }
  return process.env.NUXT_BASE_URL + `json/memes/posts${page}.json`
}

let tagUrl = (page = 1) => {
  if (laravelMode()) {
    return baseUrl() + `paginated-tags?page=${page}`
  }
  return process.env.NUXT_BASE_URL + `json/tags/tags${page}.json`
}

let categoryUrl = () => {
  if (laravelMode()) {
    return baseUrl() + `categories`
  }
  return process.env.NUXT_BASE_URL + `json/categories/categories.json`
}

function baseUrl() {
  if (process.env.APP_ENV == 'local') {
    return process.env.LOCAL_BASE_URL
  }
  return process.env.SERVER_BASE_URL
}

function laravelMode() {
  if (process.env.JSON_MODE == 'laravel') {
    return 1 // this will determine to call apis from server
  }
  return 0 // this will call .json files nuxt local static folder
}

export { postUrl, categoryUrl, tagUrl }
