import * as actions from './actions';

const toastReducer = (state = {}, action) => {
  switch(action.type) {
    case actions.SHOW_A_NEW_TOAST:
      state = action.payload
      break;
    case actions.CLOSE_TOAST:
      const newState = {
        msg: '',
        status: ''
      }
      state = newState
      break;
  }
  return state;
}

export default toastReducer
