import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer';

const initialState = {
	appHeaderAdminView: false,
}

const prod = process.env.NODE_ENV === 'production'
const composeEnhancers = prod ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
const store = createStore(rootReducer, initialState, composeEnhancers())

export { store }

