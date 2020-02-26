const dbUrl =
  'mongodb+srv://gqlUser:gql2020@gql-demo-net2l.mongodb.net/test?retryWrites=true&w=majority'
var mongoose = require('mongoose')
mongoose.connect(dbUrl, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('mongo connected')
})
module.exports = mongoose
