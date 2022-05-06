export default function (to, from, savedPosition) {
  console.log(savedPosition)
  if (savedPosition) {
    return savedPosition
  }
  return { x: 0, y: 0 }
}
