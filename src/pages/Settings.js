import React, { Component } from "react"
import { reduxForm } from 'redux-form'
import * as actions from '../actions/auth'

export default class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    this.props.getProfile()
  }

  componentWillUnmount() {
    //TODO clear alert
  }

  handleFormSubmit(formProps) {
    this.props.updateProfile(formProps) //TODO action creator
  }

  render() {
  const { handleSubmit, message, profile, fields: { name, city, state } } = this.props
    return(
      <div>
        <h3>Settings</h3>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset class="form-group">
            <label>Full Name:</label>
            <input placeholder={!profile?"":profile.name?profile.name:"Steve Jobs"} class="form-control" {...name} />
          </fieldset>
          <fieldset class="form-group">
            <label>City:</label>
            <input placeholder={!profile?"":profile.city?profile.city:"Newport Beach"} class="form-control" {...city} />
          </fieldset>
          <fieldset class="form-group">
            <label>State:</label>
            <input placeholder={!profile?"":profile.state?profile.state:"CA"} class="form-control" {...state} />
          </fieldset>
          <button action="submit" class="btn btn-primary">Save Changes</button>
          <h6>{message}</h6>
        </form>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {}

  return errors
}

function mapStateToProps(state) {
  return { profile: state.auth.profile, message: state.auth.message }
}

export default reduxForm({
  form: 'settings',
  fields: ['name', 'city', 'state'],
  validate
}, mapStateToProps, actions)(Settings)
