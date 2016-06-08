import React, { Component } from "react"
import { reduxForm } from 'redux-form'
import * as actions from '../actions/auth'

export default class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleFormSubmit(formProps) {
    this.props.editUserInfo(formProps) //TODO action creator
  }

  render() {
  const { handleSubmit, fields: { name, city, state } } = this.props
    return(
      <div>
        <h3>Settings</h3>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Full Name:</label>
            <input placeholder="Steve Jobs" className="form-control" {...name} />

          </fieldset>
          <fieldset className="form-group">
            <label>City:</label>
            <input placeholder="Newport Beach" className="form-control" {...city} />

          </fieldset>
          <fieldset className="form-group">
            <label>State:</label>
            <input placeholder="CA" className="form-control" {...state} />
          </fieldset>
          <button action="submit" className="btn btn-primary">Save Changes</button>
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
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'settings',
  fields: ['name', 'city', 'state'],
  validate
}, mapStateToProps, actions)(Settings)
