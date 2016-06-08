import axios from 'axios'
import { ADD_BOOK, DELETE_BOOK } from './types'

const API_URL = 'http://localhost:8081'||''

export function addBook(book) {
  console.log("add:,", book);
  return function(dispatch) {
    axios.post(`${API_URL}/api/book`, {
      book }, { headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        console.log(res.data);
        dispatch({ type: ADD_BOOK, payload: res.data })
      })
      .catch(res => {
        //err
      })
  }
}

export function deleteBook(book) {
  console.log("delete:,", book);
  return function(dispatch) {
    axios.delete(`${API_URL}/api/book`, { // TODO CHANGE TO URI, ISBN?
      book, headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        dispatch({ type: DELETE_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}
