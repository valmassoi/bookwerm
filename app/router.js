const auth = require('./routes/auth')
const book = require('./routes/book')

const router = require('express').Router()

module.exports = function(app) {
  main: router,
  auth(app),
  book(app)
}
