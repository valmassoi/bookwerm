import React, { Component } from 'react'
import BookItem from './book_item'

class BookList extends Component {

  render() {
    let books = [
      { title:'book1', img:'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/7/30/18/grid-cell-14969-1375222023-8.jpg' },
      { title:'book2', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' },
    { title:'book3', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' },
  { title:'book4', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' },
{ title:'book5', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' },
{ title:'book6', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' }] //HACK

    return (
      <ul class="list-group" style={{marginTop: '5px'}}>
        {books.map(book => {
          return (
            <BookItem book={book} key={book.title} />

          )
        })}
      </ul>
    )
  }
}

export default BookList
