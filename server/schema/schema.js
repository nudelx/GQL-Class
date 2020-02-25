const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql

const db = {
  books: [
    { name: 'AAAA', genre: 'aaaa', id: '1', author_id: '1' },
    { name: 'BBBB', genre: 'bbbb', id: '2', author_id: '2' },
    { name: 'CCCC', genre: 'cccc', id: '3', author_id: '3' },
    { name: 'DDDD', genre: 'dddd', id: '4', author_id: '1' }
  ],
  authors: [
    { name: 'Author AAAA', age: 22, id: '1', book_id: '1' },
    { name: 'Author BBBB', age: 33, id: '2', book_id: '2' },
    { name: 'Author CCCC', age: 44, id: '3', book_id: '3' }
  ]
}

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return db.authors.find(item => item.id === parent.author_id)
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
        return db.books.filter(i => parent.id === i.author_id)
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return db.books.find(item => item.id === args.id)
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return db.authors.find(item => item.id === args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
