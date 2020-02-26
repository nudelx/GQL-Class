const Sequelize = require('sequelize')
const db = new Sequelize('gql-demo', 'root', '', {
  dialect: 'mysql'
})

module.exports = db
