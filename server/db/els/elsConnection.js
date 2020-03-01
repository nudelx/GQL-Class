const elasticsearch = require('elasticsearch')
const chalk = require('chalk')

class ElsConnectionPool extends elasticsearch.ConnectionPool {
  markAlive(connection) {
    super.markAlive(connection)
  }
}

const els = {
  els: new elasticsearch.Client({
    ConnectionPool: ElsConnectionPool,
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '5.6',
    maxRetries: 10,
    keepAlive: true,
    maxSockets: 10,
    minSockets: 10
  }),

  search: async function(query) {
    return this.els.search(query)
  }
}
console.log(chalk.hex('#009432').inverse(' Els Connected \n'))
module.exports = els
