import * as actions from './actions'

const tagsEntityReducer = (state = {}, action) => {
  switch(action.type) {
    case actions.RECEIVE_ALL_TAGS:
      state = action.payload
      break;
    case actions.RECEIVE_ONE_TAG:
      state = {...state}
      if (!state[action.payload.project_id]) state[action.payload.project_id] = []
      state[action.payload.project_id].push(action.payload)
      break;
  }

  return state
}

export default tagsEntityReducer