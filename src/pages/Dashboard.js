import React, { Component } from "react"
import { Link } from 'react-router'
import AddBook from '../components/book_search'
import BookList from '../components/book_list'

import Trades from '../components/trades'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    const style = {
      clear: 'both'
    }

    return(
      <div>
        <h1>Dashboard</h1>
        <h3>Trade Requests</h3>
        <Trades />
        <h3>Add to your collection</h3>
        <AddBook />
        <BookList mode="search" />
        <h3 style={style}>Your Collection</h3>
        <BookList mode="user_collection" />
      </div>
    )
  }
}
