import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import bookReducer from './book_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  books: bookReducer
});

export default rootReducer
