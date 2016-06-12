import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookItem from './book_item'
import * as actions from '../actions/book'

class BookList extends Component {


  deleteBook(book) {
    this.props.deleteBook(book.title)
  }

  selectBook(book) {
    this.props.selectBook(book)
  }

  requestBook(book) {
    this.props.requestBook(book)
  }

  render() {
    let { mode, searchBooks, collectionBooks, allBooks } = this.props
    let books = []
    if (mode=="search")
      books = [...searchBooks]
    if (mode=="user_collection")
      books = [...collectionBooks]
    if (mode=="all") //all but own
      books = _.differenceBy(allBooks, collectionBooks, 'title')
    return (
      <ul class="list-group" style={{marginTop: '5px'}}>
        {books.map((book, i) => {
          return (
            <BookItem book={book} key={book.title+i} selectBook={book => this.selectBook(book)} requestBook={book => this.requestBook(book)} deleteBook={book => this.deleteBook(book)} mode={mode} />
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchBooks: state.books.searchBooks,
    collectionBooks: state.books.collectionBooks,
    allBooks: state.books.allBooks
  }
}

export default connect(mapStateToProps, actions)(BookList)
