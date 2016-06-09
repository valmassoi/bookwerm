import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, UPDATE_PROFILE } from './types'

const API_URL = 'http://localhost:8081'||''

export function signinUser({ email, password }) {
  return function(dispatch) { // thunk
    axios.post(`${API_URL}/signin`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER, payload: email })
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('email', email)
        browserHistory.push('/dashboard')
      })
      .catch(() => {
        dispatch(authError('Invaild Email or Password'))
      })
  }
}

export function signupUser({ email, password }) { // Could DRY up with signinUser
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then(res => {
        dispatch({ type: AUTH_USER, payload: email })// flips state to logged in
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('email', email)
        browserHistory.push('/dashboard')
      })
      .catch(res => {
        dispatch(authError(res.data.error))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.clear()
  return {
    type: UNAUTH_USER
  }
}

export function updateProfile(formProps) {
  return function(dispatch) {
    axios.post(`${API_URL}/profile`, { formProps }, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: UPDATE_PROFILE,
          // payload: res.data.profile
        })
      })
  }
}
