import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store/configureStore'
import Root from './containers/Root'
import routes from '../routers/'

const initialState = window.$INITIAL_STATE
const store = configureStore(browserHistory, initialState)
const history = syncHistoryWithStore(browserHistory, store)

const target = document.getElementById('root')

const node = (
  <Root
    store={store}
    routes={routes}
    history={history} />
)

ReactDOM.render(node, target)
