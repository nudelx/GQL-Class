const dbUrl =
  'mongodb+srv://gqlUser:gql2020@gql-demo-net2l.mongodb.net/test?retryWrites=true&w=majority'
var mongoose = require('mongoose')

const connectDb = () => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    console.log('Mongo connected')
  })
  return mongoose
}

module.exports = connectDb
