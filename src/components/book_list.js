import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookItem from './book_item'
import * as actions from '../actions/book'

class BookList extends Component {

  deleteBook(book) {
    this.props.deleteBook(book.title)
  }

  render() {
    let books = [...this.props.books]
    //TODO add book
    return (
      <ul class="list-group" style={{marginTop: '5px'}}>
        {books.map(book => {
          return (
            <BookItem book={book} key={book.title} deleteBook={book => this.deleteBook(book)} />
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return { books: state.books.books }
}

export default connect(mapStateToProps, actions)(BookList)
