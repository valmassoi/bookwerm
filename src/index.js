require('file?name=[name].[ext]!../index.html')// for webpack
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, browserHistory } from 'react-router'
import reducers from './reducers/reducers'
import routes from './routes'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , app
)
