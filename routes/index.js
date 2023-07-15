const pagesRoutes = require('./news')
const categoriesRoutes = require('./categories')
// const maincontentRoutes = require('./maincontent')

function route(app) {
    app.use('/pages', pagesRoutes)
    app.use('/categories', categoriesRoutes)
    // app.use('/maincontent', maincontentRoutes)
}

module.exports = route;