import { BOOK_SEARCH, SELECT_BOOK, DELETE_BOOK } from '../actions/types'

export default function(state = { books:[] }, action) {
  switch (action.type) {
    case BOOK_SEARCH:
      return { ...state, books: action.payload}
    case SELECT_BOOK:
      return { ...state, book: action.payload, books: []}
    case DELETE_BOOK:
      return { ...state, book: action.payload}
  }
  return state
}
