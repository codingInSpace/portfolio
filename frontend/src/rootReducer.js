import { combineReducers } from 'redux';
import { headerColorReducer } from './shared/containers/AppHeader'
import { newProjectClearFormReducer } from './cms/containers/NewProject'
import { projectsEntityReducer } from './shared/entities/Projects'
import { tagsEntityReducer } from './shared/entities/Tags'
import { imagesEntityReducer } from './shared/entities/Images'
import { bannerOffsetReducer } from './app'
import { toastReducer } from './shared/containers/AppToast'

const rootReducer = combineReducers({
	appHeaderAdminView: headerColorReducer,
  newProjectFormToBeCleared: newProjectClearFormReducer,
  projectsById: projectsEntityReducer,
  tagsByProjectId: tagsEntityReducer,
  imagesById: imagesEntityReducer,
  appBannerOffset: bannerOffsetReducer,
  appToast: toastReducer
})

export default rootReducer
