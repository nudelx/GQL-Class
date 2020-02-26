const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql
const { BookType, AuthorType } = require('./types')
/// mongo
const Author = require('../db/mongo/models/author')
const Book = require('../db/mongo/models/books')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        // return db.books.find(item => item.id === args.id)
        return Book.findById(args.id)
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        // return db.authors.find(item => item.id === args.id)
        return Author.findById(args.id)
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        // return db.books
        return Book.find({})
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) => {
        // return db.authors
        return Author.find({})
      }
    }
  }
})

module.exports = RootQuery
