import { receiveUserCredentials } from '../cms/containers/Login/ducks'

// Actions
export const SET_HEIGHT_OFFSET_OF_BANNER = 'SET_HEIGHT_OFFSET_OF_BANNER'
const SET_LOCALLY_STORED_DATA = 'SET_LOCALLY_STORED_DATA'
const CHECK_LOCALLY_STORED_DATA = 'CHECK_LOCALLY_STORED_DATA'

// Reducer
export default function bannerOffsetReducer(state = 0, action) {
  switch(action.type) {
    case SET_HEIGHT_OFFSET_OF_BANNER:
      state = action.payload
      break
  }

  return state
}

// Action creators
const setLocalData = (token, email) => ({
  type: SET_LOCALLY_STORED_DATA,
  payload: { token, email }
})

const checkLocalData = () => ({
  type: CHECK_LOCALLY_STORED_DATA
})

// Thunks
export function getLocalStorage() {
  return (dispatch) => {
    dispatch(checkLocalData())

    if (typeof(Storage) === "undefined") return

    const payload = {
      token: localStorage.getItem('token'),
      email: localStorage.getItem('email')
    }

    if (payload.token && payload.email) 
      dispatch(receiveUserCredentials(payload))
  }
}

