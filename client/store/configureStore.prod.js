import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

export function configureStore(history, initialState) {
    let finalCreateStore = compose(
      applyMiddleware(thunk, routerMiddleware(history))
    )(createStore)

    let store = finalCreateStore(rootReducer, initialState)

    return store
}
