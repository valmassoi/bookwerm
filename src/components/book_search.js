import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import * as actions from '../actions/book'

class BookSearch extends Component {//TODO RENAME ACTIONS, REDUCER... TO SEARCH

  constructor(props) {
    super(props);
    this.state = {
      book: ''
    }
  }

  handleInputChange(e) {
    let book = e.target.value
    this.setState({ book })
  }

  handleSubmit(e) {
    e.preventDefault(e)
    let { book } = this.state
    if(book.length>0)
      this.props.addBook(book)
    e.target.reset()
  }

  render() {
    return (
      <form role="search" onSubmit={this.handleSubmit.bind(this)}>
        <input
          style={{maxWidth: '300px', float: 'left', marginTop: '5px', marginRight: '5px'}}
          placeholder="1984" class="form-control"
          onChange={e => this.handleInputChange(e)} />
        <button
          style={{marginTop: '5px'}}
          action="submit" class="btn btn-primary">
          Search
        </button>
      </form>
    )
  }

}

export default connect(null, actions)(BookSearch)
