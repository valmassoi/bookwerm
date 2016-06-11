import axios from 'axios'
import { BOOK_SEARCH, SELECT_BOOK, DELETE_BOOK } from './types'

let API_URL = ''
if (process.env.NODE_ENV !== 'production')//TODO doesnt work
  API_URL = 'http://localhost:8081'

export function addBook(book) {//search
  console.log("search:,", book);
  return function(dispatch) {
    axios.get(`${API_URL}/api/book/${book}`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: BOOK_SEARCH, payload: res.data })
      })
      .catch(res => {
        //err
      })
  }
}

export function selectBook(book) {
  return function(dispatch) {
    axios.post(`${API_URL}/api/book`, {
      book }, { headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        console.log(res.data)
        dispatch({ type: SELECT_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}

export function deleteBook(book) {
  console.log("delete:,", book);
  return function(dispatch) {
    axios.delete(`${API_URL}/api/book`, { // TODO CHANGE TO URI?
      book, headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        //TODO MONGO
        dispatch({ type: DELETE_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}
