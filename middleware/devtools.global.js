// middleware/devtools.global.js
export default function (to) {
  if (to.path.includes('/.well-known/appspecific/')) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }
}