import { combineReducers } from 'redux';
import { headerColorReducer } from './shared/containers/AppHeader'
import { loginReducer } from './cms/containers/Login'
import { newProjectClearFormReducer } from './cms/containers/NewProject'
import projectsEntityReducer from './shared/entities/Projects'
import { tagsEntityReducer } from './shared/entities/Tags'
import imagesEntityReducer from './shared/entities/Images'
import projectsLoadingReducer from './shared/entities/Loading'
import { bannerOffsetReducer } from './app'
import { toastReducer } from './shared/containers/AppToast'

const rootReducer = combineReducers({
	appHeaderAdminView: headerColorReducer,
  newProjectFormToBeCleared: newProjectClearFormReducer,
  user: loginReducer,
  projectsById: projectsEntityReducer,
  tagsByProjectId: tagsEntityReducer,
  imagesById: imagesEntityReducer,
  projectsLoading: projectsLoadingReducer,
  appBannerOffset: bannerOffsetReducer,
  appToast: toastReducer
})

export default rootReducer
