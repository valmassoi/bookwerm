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
      </div>
    )
  }
}
