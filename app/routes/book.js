'use strict'

const Authentication = require('../controllers/authentication')
const passportService = require('../services/passport')
const passport = require('passport')
const axios = require('axios')

const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = function(app) {

  app.get('/api/book/:title', (req, res) => {
    let { title } = req.params
    // let bookData = {}
    const GOOGLE_API_URL = 'https://www.googleapis.com/books/v1/volumes?q='
    axios.get(`${GOOGLE_API_URL}${title}`)
      .then(json => {// abstraction
        let img = 'http://i.istockimg.com/file_thumbview_approve/47538588/5/stock-illustration-47538588-white-book-3d-icon.jpg',
            author = 'Unknown',
            booksData = []
        json.data.items.forEach(book => {
          let { title, authors, imageLinks } = book.volumeInfo
          if (imageLinks)
            img = book.volumeInfo.imageLinks.thumbnail
          if (authors)
            author = authors[0]
          let bookData = { title, author, img }
          booksData.push(bookData)
        })
        res.status(201).send(booksData)
      })
      .catch(err => {
        res.status(400).send('Sorry, we cannot find that!')
      })
  })

  app.get('/api/books', requireAuth, (req, res, next) => {//no auth give just all
    console.log("GETING BOOKS")
    Authentication.books(req.user.books, res, next)
  })

  app.post('/api/book', requireAuth, (req, res, next) => {
    Authentication.book(req.user.email, req.body.book, res, next, "add")
  })

  app.delete('/api/book/:book', requireAuth, (req, res, next) => {
    console.log(req.user.email)//TOKEN!
    let { book } = req.params
    Authentication.book(req.user.email, book, res, next, "delete")
  })

}
