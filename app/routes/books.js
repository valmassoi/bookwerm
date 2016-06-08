'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'testing secret code is test123' })
  })
  app.post('/api/book', requireSignin, Authentication.signin)
  app.post('/api/', Authentication.signup)
}
