const Sequelize = require('sequelize')
const db = new Sequelize('gql-demo', 'root', '', {
  dialect: 'mysql'
  // logging: true
})

module.exports = db
