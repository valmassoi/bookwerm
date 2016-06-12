import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, UPDATE_PROFILE, GET_PROFILE } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '', email: action.payload.email, profile: action.payload.profile}
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '', email: '', profile: ''}
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case UPDATE_PROFILE:
      return { ...state, message: action.payload.message, profile: action.payload.profile }
    case GET_PROFILE:
      return { ...state, profile: action.payload }
  }
  return state
}
