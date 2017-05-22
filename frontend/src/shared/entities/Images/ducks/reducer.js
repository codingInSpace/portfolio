import * as actions from './actions'

const imagesEntityReducer = (state = {}, action) => {
  switch(action.type) {
    case actions.RECEIVE_ALL_IMAGES:
      state = action.payload
      break;
    case actions.RECEIVE_ONE_IMAGE:
      state = {...state}
      state[action.payload.id] = action.payload
      break;
  }

  return state
}

export default imagesEntityReducer