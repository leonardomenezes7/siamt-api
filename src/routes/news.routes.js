const { Router } = require("express")
const NewsController = require("../controllers/NewsController")

const newsRoutes = Router()
const newsController = new NewsController()

newsRoutes.post("/", newsController.create)

module.exports = newsRoutes