import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'
import AddBook from '../components/book_search'
import BookList from '../components/book_list'
import * as bookActions from '../actions/book'

import Trades from '../components/trades'

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() { //load my collection, and trade req
    this.props.getBooks()
  }

  render() {
    const style = {
      clear: 'both'
    }
    let { collectionBooks } = this.props

    return(
      <div>
        <h1>Dashboard</h1>
        <h3>Trade Requests</h3>
        <Trades />
        <h3 style={style}>Add to my collection</h3>
        <AddBook />
        <BookList mode="search" />
        <h3 style={style}>My Collection</h3>
        {
          collectionBooks.length > 0 ?
          <BookList mode="user_collection" /> :
          <div>No books in collection, add one above</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchBooks: state.books.searchBooks,
    collectionBooks: state.books.collectionBooks
  }
}

export default connect(mapStateToProps, bookActions)(Dashboard)
