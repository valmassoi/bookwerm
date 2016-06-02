import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

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
        <h5>Home now cool</h5>
        <Link to="login">login</Link>
      </div>
    )
  }
}
