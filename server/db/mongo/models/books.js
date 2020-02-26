const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
  movieId: String
})

module.exports = mongoose.model('Book', bookSchema)
