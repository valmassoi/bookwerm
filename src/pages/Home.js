import React, { Component } from "react"
import { Link } from 'react-router'

export default class Home extends Component {

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
        <h1>Welcome to Bookwerm</h1>
        <ul>
          <li>Catalog all of your books</li>
          <li>See other users' books</li>
          <li>Make trade requests</li>
        </ul>
      </div>
    )
  }
}
