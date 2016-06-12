import React, { Component } from "react"
import { Link, browserHistory } from "react-router"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'
import * as bookActions from '../actions/book'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true
    }
  }

  componentWillMount() {
    this.props.authActions.getProfile()
    this.props.bookActions.getBooks()//dont need here?
  }

  renderLinks() {
    const { authenticated, profile, email } = this.props

    if(!authenticated) {
      return [
        <li class={this.loginClass} key={1}><Link to="/signin" onClick={this.setCollapsed.bind(this)}>Login</Link></li>,

        <li key={2}><Link to="/signup" onClick={this.setCollapsed.bind(this)}>Signup</Link></li>
      ]
    }
    else {
      return (
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{!profile?email.split("@")[0]:profile.name?profile.name:email.split("@")[0]}
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><Link to="dashboard" onClick={this.setCollapsed.bind(this)}>Dashboard</Link></li>
            <li><Link to="settings" onClick={this.setCollapsed.bind(this)}>Settings</Link></li>
            <li role="separator" class="divider"></li>
            <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
          </ul>
        </li>
      )
    }
  }

  logout() {
    this.props.authActions.signoutUser()
    browserHistory.push('/')
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({ collapsed })
  }
  setCollapsed() {
    this.setState({ collapsed: true })
  }

  render(){
    const { authenticated } = this.props
    const { collapsed } = this.state

    const homeClass = location.pathname === "/" ? "active" : ""
    const loginClass = location.pathname.match(/^\/signin/) ? "active" : ""
    const navClass = collapsed ? "collapse" : ""

    return(
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Bookwerm</a>
          </div>
          <div class={"navbar-collapse " + navClass}>
            <ul class="nav navbar-nav">
              <li class={homeClass}><Link to="/" onClick={this.setCollapsed.bind(this)}>Home</Link></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><Link to="/library" onClick={this.setCollapsed.bind(this)}>All Books</Link></li>
              {this.renderLinks()}

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    email: state.auth.email,
    profile: state.auth.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav)
