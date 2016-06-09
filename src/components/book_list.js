import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookItem from './book_item'
import * as actions from '../actions/book'

class BookList extends Component {


  deleteBook(book) {
    this.props.deleteBook(book.title)
  }

  selectBook(book) {
    this.props.selectBook(book)//TODO
  }

  render() {
    let { mode } = this.props
    let books = []
    if (mode=="search")
      books = [...this.props.books]//TODO change name in reducer/actions
    if (mode=="user_collection"){//HACK
      books = [
        { title:'book1', img:'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/7/30/18/grid-cell-14969-1375222023-8.jpg' },
        { title:'book2', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' }]
    }
    if (mode=="all"){//HACK
      books = [
        { title:'bookall1', img:'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr06/2013/7/30/18/grid-cell-14969-1375222023-8.jpg' },
        { title:'bookall2', img:'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_pb_new_1.jpg' }]
    }
    return (
      <ul class="list-group" style={{marginTop: '5px'}}>
        {books.map((book, i) => {
          return (
            <BookItem book={book} key={book.title+i} selectBook={book => this.selectBook(book)} deleteBook={book => this.deleteBook(book)} mode={mode} />
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
