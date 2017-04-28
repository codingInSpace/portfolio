import { combineReducers } from 'redux';
import { headerColorReducer } from './shared/containers/AppHeader'
import { newProjectClearFormReducer } from './cms/containers/NewProject'
import { projectsEntityReducer } from './shared/entities/Projects'
import { bannerOffsetReducer } from './app'

const rootReducer = combineReducers({
	appHeaderAdminView: headerColorReducer,
  newProjectFormToBeCleared: newProjectClearFormReducer,
  projectsById: projectsEntityReducer,
  appBannerOffset: bannerOffsetReducer
})

export default rootReducer
