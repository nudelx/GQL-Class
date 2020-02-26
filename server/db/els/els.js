const els = require('./elsConnection')

const elsRun = {
  buildQuery: what => {
    return {
      index: 'movies',
      body: {
        query: {
          bool: { must: { match: { id: `${what}` } } }
        }
      }
    }
  },
  run: async function(query) {
    try {
      const resp = await els.search(query)
      return resp.hits.hits
    } catch (error) {
      console.trace(error.message)
    }
  }
}

module.exports = elsRun
