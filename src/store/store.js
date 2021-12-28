import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

let middleware = [reduxThunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware))
