import { ADD_BOOK, DELETE_BOOK } from '../actions/types'

export default function(state = { books:[] }, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: action.payload}
    case DELETE_BOOK:
      return { ...state, book: action.payload}
  }
  return state
}
