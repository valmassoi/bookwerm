'use strict'

const express = require('express')
const http = require('http')
const routes = require('./app/routes/someroute')
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27018/data'

app.use(express.static(__dirname+'/public/'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.enable('trust proxy')

app.get('*', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('404!')
})

const port = process.env.PORT || 8081

const server = http.Server(app)
server.listen(port, () => {
  console.log('Server Running on port: ' + port)
})
