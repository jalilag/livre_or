const { Pool} = require('pg')

const pool = new Pool({
  user: 'jalil',
  host: 'localhost',
  database: 'livre_or',
  password: 'jalil',
  port: 5432,
})

module.exports = pool
