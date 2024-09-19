const AppError = require("../utils/AppError")
const knex = require("../database/knex")
const dayjs = require("dayjs")

class NewsController {
  async create(request, response) {
    const { title, author, description, image } = request.body

    if (!title) {
      throw new AppError("O título é obrigatório.")
    }

    if (!author) {
      throw new AppError("Informe o autor.")
    }

    if (!description) {
      throw new AppError("A descrição é obrigatória.")
    }

    if (!image) {
      throw new AppError("Escolha uma imagem.")
    }

    const date = new Date()
    const formattedDate = dayjs(date).format("YYYY-MM-DD")

    const newNotice = {
      title,
      author,
      description,
      image,
      created_at: formattedDate
    }

    await knex("news").insert(newNotice)

    return response.json()
  }
}

module.exports = NewsController