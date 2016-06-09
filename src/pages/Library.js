import React, { Component } from 'react'
import BookList from '../components/book_list'

class Library extends Component {

  render() {
    return (
      <BookList mode="all" />
    )
  }

}

export default Library
