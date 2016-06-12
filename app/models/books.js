const mongoose = require('mongoose')
const Schema = mongoose.Schema

//DONT NEED???
// Define our model
const booksSchema = new Schema({
  all: Array
  /*
  [{ book:{ title, author, img}, DATA:{ owner, TRADESTATUS? } } }]
  */
})

// Create the model class
const ModelClass = mongoose.model('books', booksSchema)

// Export the model
module.exports = ModelClass
