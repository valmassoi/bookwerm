import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import BookList from '../components/book_list'

class Library extends Component {

  render() {
    let { allBooks } = this.props

    return (
      <div>
        <Link to="/dashboard">
          <button class="btn btn-primary pull-right">Dashboard</button>
        </Link>
        <h1>Library</h1>
        {
          allBooks.length > 0 ?
          <BookList mode="all" /> :
          <h3>No books added yet, be the first werm!</h3>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allBooks: state.books.allBooks
  }
}

export default connect(mapStateToProps, null)(Library)
