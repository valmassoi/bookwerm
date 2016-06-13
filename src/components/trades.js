import React, { Component } from 'react'
import { Link } from 'react-router'
import BookList from '../components/book_list'

class Trades extends Component {

  render() {
    const style = {
      clear: 'both'
    }
    return (
      <div>No active trades? Find a book you like in <Link to="/library">All Books</Link>
      <h4>My requests:</h4>
      <h6>Wishlist queue (wait for owner):</h6>
      <BookList mode="wishlist" />
      <h6 style={style}>Borrowing:</h6>
      <BookList mode="borrowing" />
      <h4 style={style}>Requests for me:</h4>
      <h6 style={style}>Queue:</h6>
      <BookList mode="queue" />
      <h6 style={style}>Loaned Out:</h6>
      <BookList mode="approved" />
      </div>
    )
  }
}

export default Trades
