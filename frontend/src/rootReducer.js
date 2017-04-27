import { combineReducers } from 'redux';
import { headerColorReducer } from './shared/containers/AppHeader'
import { newProjectClearFormReducer } from './cms/containers/NewProject'

const rootReducer = combineReducers({
	appHeaderAdminView: headerColorReducer,
  newProjectFormToBeCleared: newProjectClearFormReducer,
})

export default rootReducer

