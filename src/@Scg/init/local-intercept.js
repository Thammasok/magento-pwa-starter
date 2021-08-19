const routeLists = require('../src/routers/index.js')

module.exports = targets => {
  targets.of('@magento/venia-ui').routes.tap(routes => {
    routeLists().map(rl => routes.push(rl))
    return routes
  })
}
