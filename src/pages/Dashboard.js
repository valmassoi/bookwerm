import React, { Component } from "react"
import { Link } from 'react-router'
import AddBook from '../components/add_book'
import BookList from '../components/book_list'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {

    return(
      <div>
        <h2>Dashboard</h2>
        Add to your collection:
        <AddBook />
        <BookList />
      </div>
    )
  }
}
