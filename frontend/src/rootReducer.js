import { combineReducers } from 'redux';
import { headerColorReducer } from './shared/containers/AppHeader'

const rootReducer = combineReducers({
	appHeaderAdminView: headerColorReducer
})

export default rootReducer

