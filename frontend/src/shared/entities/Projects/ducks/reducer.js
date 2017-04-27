import * as actions from './actions'

const projectsEntityReducer = (state = [], action) => {
  switch(action.type) {
    case actions.RECEIVE_ALL_PROJECTS:
      state = action.payload
      break;
  }

  return state
}

export default projectsEntityReducer