import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer';
import ReduxThunk from 'redux-thunk'

const initialState = {

	// views
	appHeaderAdminView: false,
	newProjectFormToBeCleared: false,

	// config
	appBannerOffset: 0,

	// data
	projectsById: {},
  tagsByProjectId: {},
  imagesById: {},
}

const prod = process.env.NODE_ENV === 'production'
const composeEnhancers = prod ? compose : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)))

export { store }

