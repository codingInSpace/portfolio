import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk'

const initialState = {
	appHeaderAdminView: false,
	newProjectFormToBeCleared: false,
}

const prod = process.env.NODE_ENV === 'production'
const composeEnhancers = prod ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)))

export { store }

