import { BOOK_SEARCH, GET_BOOKS, SELECT_BOOK, DELETE_BOOK, REQUEST_BOOK, APPROVE_BOOK, REJECT_BOOK, UNAUTH_USER } from '../actions/types'
import _ from 'lodash'

export default function(state = { searchBooks:[], collectionBooks:[], allBooks:[] }, action) {
  switch (action.type) {
    case UNAUTH_USER:
      return { ...state, searchBooks:[], collectionBooks:[], allBooks:[] }
    case BOOK_SEARCH:
      return { ...state, searchBooks: action.payload}
    case GET_BOOKS:
      return {
        ...state,
        collectionBooks: action.payload.collection,
        allBooks: action.payload.all //TODO HIDE TRADING BOOKS
      }
    case SELECT_BOOK:
      return {
        ...state,
        collectionBooks: [action.payload, ...state.collectionBooks],
        allBooks: [action.payload, ...state.allBooks],//Dont need?
        searchBooks: []
      }
    case REQUEST_BOOK:
      return {
        ...state,
        allBooks: _.reject(state.allBooks, { title: action.payload.title })
      }
    case APPROVE_BOOK:

      return {
        ...state,
        collectionBooks: [..._.reject(state.collectionBooks, { title: action.payload.title }), action.payload] //replace with new status
      }
    case REJECT_BOOK:
      return {
        ...state,
        collectionBooks: [..._.reject(state.collectionBooks, { title: action.payload.title }), action.payload]
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
