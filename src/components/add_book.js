import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../actions'

class AddBook extends Component {

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
    console.log(book);
    //TODO action creaetor
    e.target.reset()
  }

  render() {
    return (
      <form role="search" onSubmit={this.handleSubmit.bind(this)}>
        <input
          style={{maxWidth: '300px', float: 'left', marginTop: '5px', marginRight: '5px'}}
          placeholder="1984" className="form-control"
          onChange={e => this.handleInputChange(e)} />
        <button
          style={{marginTop: '5px'}}
          action="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    )
  }

}

export default AddBook
