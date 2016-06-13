'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })//false is to use tokens over cookies
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'testing secret code is test123' })
  })

  app.post('/profile', requireAuth, (req, res, next) => {//change to PUT?
    Authentication.profile(req.user.email, req.body.formProps, res, next)
  })

  app.get('/profile', requireAuth, (req, res, next) => {
    Authentication.profile(req.user.email, null, res, next)
  })

  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}
