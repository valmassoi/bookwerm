const auth = require('./routes/auth')

const router = require('express').Router()

module.exports = function(app) {
  main: router,
  auth(app)
}
