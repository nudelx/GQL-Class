const graphql = require('graphql')
const {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = graphql
const { BookType, AuthorType } = require('./types')

const Author = require('../db/models/author')
const Book = require('../db/models/books')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (parent, args) => {
        const { name, age } = args
        const author = new Author({
          name,
          age
        })
        return author.save()
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (parent, args) => {
        const { name, genre, authorId } = args
        const book = new Book({
          name,
          genre,
          authorId
        })
        return book.save()
      }
    }
  }
})

module.exports = Mutation
