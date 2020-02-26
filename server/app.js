const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const schema = require('./schema/schema')
const mongoose = require('./db/mongoDb')

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(8080, function() {
  console.log('app is up @ localhost:8080')
})
