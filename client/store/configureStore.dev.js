import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux'

export function configureStore(history, initialState) {
    let devTools = []
    let logger = []
    if (typeof document !== 'undefined') {
        devTools = [DevTools.instrument()]
        logger = [
            createLogger({
                level: 'info',
                collapsed: true
            })
        ]
    }

    let finalCreateStore = compose(
        applyMiddleware(
            thunk,
            ...logger,
            routerMiddleware(history)
        ),
        ...devTools
    )(createStore)

    let store = finalCreateStore(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
