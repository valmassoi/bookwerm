'use strict';

const someRouter = require('express').Router()

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()

someRouter.get('/:someParam', (req, res) => {
  let { someParam } = req.params
  res.writeHead(200, { "Content-Type": "application/json" })
  res.end(JSON.stringify())
})

module.exports = someRouter
