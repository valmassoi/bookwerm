import React, { Component } from 'react'
import { Link } from 'react-router'

class Trades extends Component {

  render() {
    return (
      <div>No active trades, find a book you like in <Link to="/library">All Books</Link>
      <h4>My requests:</h4>
      <h6>Wishlist queue:</h6>
      <h6>Approved:</h6>
      <h4>Requests for me:</h4>
      <h6>Queue:</h6>
      <h6>Approved:</h6>
      </div>
    )
  }

}

export default Trades
