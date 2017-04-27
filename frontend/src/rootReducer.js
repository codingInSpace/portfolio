import { combineReducers } from 'redux';
import { headerColorReducer } from './shared/containers/AppHeader'
import { newProjectClearFormReducer } from './cms/containers/NewProject'
import { projectsEntityReducer } from './shared/entities/Projects'

const rootReducer = combineReducers({
	appHeaderAdminView: headerColorReducer,
  newProjectFormToBeCleared: newProjectClearFormReducer,
  projectsById: projectsEntityReducer,
})

export default rootReducer

