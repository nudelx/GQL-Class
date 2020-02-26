const graphql = require('graphql')
const { GraphQLSchema } = graphql
const RootQuery = require('./rootQuery')
const Mutation = require('./mutation')
const connectDb = require('../db/mongoDb')
connectDb()

// const db = require('../db/db.js')

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
