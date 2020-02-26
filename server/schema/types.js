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

module.exports = {
  AuthorType,
  BookType
}
