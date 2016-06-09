import React, { Component } from 'react'
import { Link } from 'react-router'

class Trades extends Component {

  render() {
    return (
      <div>No active trades, find a book you like in <Link to="/library">All Books</Link>
      </div>
    )
  }

}

export default Trades
