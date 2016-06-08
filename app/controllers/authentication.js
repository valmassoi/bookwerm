const jwt = require('jwt-simple')
const User = require('../models/user')

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()
const { SECRET_KEY, SENDGRID_USER, SENDGRID_PASSWORD } = process.env
const sendgrid = require('sendgrid')(SENDGRID_USER, SENDGRID_PASSWORD)

function tokenForUser(user) {
  const timestamp = Date.now()
  return jwt.encode({ sub: user.id, iat: timestamp }, SECRET_KEY) //dont use email,,,, sub is the subject of the token,,,, iat: issue at time
}

function sendEmail(email) {
  sendgrid.send({
    to:       email,
    from:     'noreply@bookwerm.heroku.com',
    subject:  'Bookwerm Account Created!',
    text:     'Thanks for signing up. Visit http://bookwerm.heroku.com/dashboard to get started!'
  }, (err, json) => {
    if (err) { return console.error(err) }
    console.log("send grid:", json)
  })
}

exports.signin = function(req, res, next) {
  //user has email and pass authed, give them a token
  res.send({ token: tokenForUser(req.user) })
}

exports.signup = function(req, res, next) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' })
  }

  User.findOne({ email: email}, (err, existingUser) => { //see if user with given email exists
    if(err) {return next(err)}

    if(existingUser) { //if does: return error
      return res.status(422).send({ error: 'Email is in use' })
    }

    const user = new User({ //else create and save record
      email,
      password
    })

    user.save((err) => {
      if(err) {return next(err)}
      res.json({ token: tokenForUser(user) })
      sendEmail(email)
    })

  })
}
