const { DataTypes } = require('sequelize')
const sequelize = require('../mysqlDb')
const chalk = require('chalk')

const check = async () => {
  console.log(chalk.hex('#009432').inverse(' MySql connected \n'))
  await sequelize.sync()
}

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
