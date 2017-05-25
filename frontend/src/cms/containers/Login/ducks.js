import axios from 'axios'
import { toastThunks } from '../../../shared/containers/AppToast'

// Actions
const LOGIN_USER_WITH_CREDENTIALS = 'LOGIN_USER_WITH_CREDENTIALS'
const RECEIVE_USER_CREDENTIALS = 'RECEIVE_USER_CREDENTIALS'

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case RECEIVE_USER_CREDENTIALS:
      state = action.payload
      break
    default:
      return state
  }

  return state
}

// Action creators
export function receiveUserCredentials(data) {
  return { type: RECEIVE_USER_CREDENTIALS, payload: data };
}

// Thunks
export function loginUserThunk(userData) {
  return (dispatch) => {
    dispatch({type: LOGIN_USER_WITH_CREDENTIALS})

    const url = `${process.env.APP_URL}/users/sign_in`
    console.log(url)

    try {
      axios.post(url, userData)
        .then(response => {
          const { data } = response
          const payload = {
            id: data.id,
            email: data.email,
            token: data.authentication_token
          }

          dispatch(toastThunks.showToast({status: 'ok', msg: `Logged in as ${payload.email}`}))
          dispatch(receiveUserCredentials(payload))
        })
        .catch(reason => {
          dispatch(toastThunks.showToast({status: 'critical', msg: 'Could not login with given details.'}))
          console.error(reason)
        })
    } catch(e) {
      dispatch(toastThunks.showToast({status: 'critical', msg: e.toString()}))
      console.error(e)
    }
  }
}
