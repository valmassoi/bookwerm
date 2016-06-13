import axios from 'axios'
import { BOOK_SEARCH, GET_BOOKS, SELECT_BOOK, DELETE_BOOK, REQUEST_BOOK, APPROVE_BOOK, REJECT_BOOK } from './types'
import { browserHistory } from 'react-router'
import _ from 'lodash'

let API_URL = '' // http://localhost:8081

export function addBook(book) {//search
  return function(dispatch) {
    axios.get(`${API_URL}/api/book/${book}`)
      .then(res => {
        dispatch({ type: BOOK_SEARCH, payload: res.data })
      })
      .catch(res => {
        //err
      })
  }
}

export function getBooks() {
  let guest = ''
  if(!localStorage.getItem('token'))
    guest = '/guest'
  return function(dispatch) {
    axios.get(`${API_URL}/api/books${guest}`,{
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        dispatch({ type: GET_BOOKS, payload: {
          collection:res.data.collection, all: _.flattenDeep(res.data.all)
          }
        })
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
        dispatch({ type: SELECT_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}

export function requestBook(book) {
  return function(dispatch) {
    axios.post(`${API_URL}/api/book/trade`, {
      book }, { headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        browserHistory.push('/dashboard')
        dispatch({ type: REQUEST_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}

export function approveBook(book) {
  return function(dispatch) {
    axios.post(`${API_URL}/api/book/trade/approve`, {//PUT?
      book }, { headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        book.status=res.data.trade
        dispatch({ type: APPROVE_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}

export function rejectBook(book) {
  return function(dispatch) {
    axios.post(`${API_URL}/api/book/trade/reject`, {//PUT?
      book }, { headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        book.status=res.data.trade
        dispatch({ type: REJECT_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}

export function deleteBook(book) {
  return function(dispatch) {
    axios.delete(`${API_URL}/api/book/${book}`, { // TODO CHANGE TO URI?
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        dispatch({ type: DELETE_BOOK, payload: book })
      })
      .catch(res => {
        //err
      })
  }
}
