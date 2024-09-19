const { Router } = require("express")
const newsRoutes = require("./news.routes")

const routes = Router()

routes.use("/news", newsRoutes)

module.exports = routes