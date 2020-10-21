const knexfile = require('../database/knexfile.js')
const knex = require('knex')(knexfile.development)

module.exports = knex