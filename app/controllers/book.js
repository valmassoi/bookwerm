const User = require('../models/user')

exports.add = (email, book, res, next) => {
  book.owner = email
  User.findOneAndUpdate(
    { email },
    {$push: {"books": book}}, //TODO, add field(s) for trading, id
    {safe: true, upsert: true, new : true},
    (err, user) => {
      if (err) { return next(err); }
      res.send({ add: 'success' })
    }
  )
}

exports.delete = (email, book, res, next) => {
  User.findOneAndUpdate(
    { email },
    { $pull: { books: { title: book } } }, //NOTE book here is just title
    (err, user) => {
      if (err) { return next(err); }
      res.send({ del: 'success' })
    }
  )
}

exports.trade = (email, book, res, next) => {
  let test = "testing new titles"
  console.log("trade", book.title, "with", book.owner);
  User.update(
    { email: book.owner, "books.title":book.title },//TODO should be ISBN
    {$set: { "books.$.requester":email, "books.$.status":false } },

    (err, data) => {
      if (err) { return next(err); }
      //Could send email to owner here
      console.log(data);

      res.send({ trade: 'requested' })
    }
  )
}

exports.all = (userBooks, res, next) => {//email
  console.log("AGGREGATING");
  User.aggregate(
    { "$group": {
        _id: null,//"$email"
        books: { $push: "$books" }//better way to get all?
    }},
    // { "$sort": { "": -1 } } //by date added
    (err, result) => {
      if (err) { return next(err); }
      res.send({
        all:result[0].books,
        collection:userBooks
      })
    }
  )
}
