const { DataTypes } = require('sequelize')
const sequelize = require('../mysqlDb')

const check = async () => {
  await sequelize.sync()
  console.log('MySql Connected')
}
console.log('sequelize', sequelize)

const Stars = sequelize.define(
  'stars',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    bookId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
check()

module.exports = Stars
