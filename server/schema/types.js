const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = graphql

const Author = require('../db/models/author')
const Book = require('../db/models/books')

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

module.exports = {
  AuthorType,
  BookType
}
