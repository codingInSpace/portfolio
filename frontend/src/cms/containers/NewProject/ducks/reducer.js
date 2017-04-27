import * as actions from './actions'

const newProjectClearFormReducer = (state = false, action) => {
  switch(action.type) {
    case actions.CLEAR_NEW_PROJECT_FORM:
      state = true
      break;
    case actions.FINISH_CLEAR_NEW_PROJECT_FORM:
      state = false
      break;
  }

  return state;
}

export default newProjectClearFormReducer
