const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = graphql

/// mongo
const Author = require('../db/mongo/models/author')
const Book = require('../db/mongo/models/books')

/// MySql
const Stars = require('../db/mysql/models/stars')

//els
const eslRun = require('../db/els/els')

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        // return db.authors.find(item => item.id === parent.author_id)
        return Author.findById(parent.authorId)
      }
    },
    stars: {
      type: StarsType,
      resolve: async (parent, args) => {
        // return db.authors.find(item => item.id === parent.author_id)
        const res = await Stars.findAll({
          where: {
            bookId: parent._id.toString()
          }
        })
        return res[0]
      }
    },
    movie: {
      type: MovieType,
      resolve: async (parent, args) => {
        // return db.authors.find(item => item.id === parent.author_id)
        const query = eslRun.buildQuery(parent.movieId)
        const res = await eslRun.run(query)
        return res[0]._source
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        // return db.books.filter(i => parent.id === i.author_id)
        return Book.find({ authorId: parent.id })
      }
    }
  })
})

const StarsType = new GraphQLObjectType({
  name: 'Stars',
  fields: () => ({
    id: { type: GraphQLID },
    stars: { type: GraphQLInt },
    bookId: { type: GraphQLString }
  })
})

const MovieType = new GraphQLObjectType({
  name: 'Movies',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    year: { type: GraphQLInt }
  })
})

module.exports = {
  AuthorType,
  BookType,
  StarsType,
  MovieType
}
