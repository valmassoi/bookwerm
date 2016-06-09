import { BOOK_SEARCH, SELECT_BOOK, DELETE_BOOK } from '../actions/types'
import _ from 'lodash'

export default function(state = { searchBooks:[], collectionBooks:[], allBooks:[] }, action) {
  switch (action.type) {
    case BOOK_SEARCH:
      return { ...state, searchBooks: action.payload}
    case SELECT_BOOK:
      return {
        ...state,
        collectionBooks: [action.payload, ...state.collectionBooks],
        allBooks: [action.payload, ...state.allBooks],
        searchBooks: []
      }
    case DELETE_BOOK: // bad to do in reducer?, better to delete by ISBN
      return {
        ...state,
        collectionBooks: _.reject(state.collectionBooks, { title: action.payload }),
        allBooks: _.reject(state.allBooks, { title: action.payload })
      }
  }
  return state
}
