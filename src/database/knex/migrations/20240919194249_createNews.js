exports.up = knex => knex.schema.createTable("news", table => {
  table.increments("id")
  table.text("title")
  table.text("author")
  table.text("description")
  table.text("image")
  table.timestamp("created_at")
})


exports.down = knex => knex.schema.dropTable("news")
