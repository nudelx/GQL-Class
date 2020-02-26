const graphql = require('graphql')
const {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = graphql
const { BookType, AuthorType, StarsType } = require('./types')

//mongo
const Author = require('../db/mongo/models/author')
const Book = require('../db/mongo/models/books')
//mysql
const Stars = require('../db/mysql/models/stars')

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
    },

    addStar: {
      type: StarsType,
      args: {
        bookId: { type: new GraphQLNonNull(GraphQLString) },
        stars: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (parent, args) => {
        const { bookId, stars } = args
        const star = await Stars.create({
          bookId: `${bookId}`,
          stars
        })
        return star
      }
    }
  }
})

module.exports = Mutation
