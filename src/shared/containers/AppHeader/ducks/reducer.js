import * as actions from './actions'

const headerColorReducer = (state = false, action) => {
  switch(action.type) {
    case actions.SET_ADMIN_HEADER_COLOR:
      state = true
      break;
    case actions.SET_NORMAL_HEADER_COLOR:
      state = false
      break;
  }

  return state;
}

export default headerColorReducer
