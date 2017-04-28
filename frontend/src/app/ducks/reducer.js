import * as actions from './actions'

const bannerOffsetReducer = (state = 0, action) => {
  switch(action.type) {
    case actions.SET_HEIGHT_OFFSET_OF_BANNER:
      state = action.payload
      break
  }

  return state
}

export { bannerOffsetReducer }