import axios from 'axios'
import { toastThunks } from '../../../shared/containers/AppToast'

// Actions
const LOGIN_USER_WITH_CREDENTIALS = 'LOGIN_USER_WITH_CREDENTIALS'
const RECEIVE_USER_CREDENTIALS = 'RECEIVE_USER_CREDENTIALS'
const LOGOUT_USER = 'LOGOUT_USER'
const CLEAR_USER_DETAILS = 'CLEAR_USER_DETAILS'

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case RECEIVE_USER_CREDENTIALS:
      state = action.payload
      break
    case CLEAR_USER_DETAILS:
      state = { id: '', email: '', token: '' }
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

export function clearUserDetails() {
  return { type: CLEAR_USER_DETAILS };
}

// Thunks
export function loginUserThunk(userData) {
  return (dispatch) => {
    dispatch({type: LOGIN_USER_WITH_CREDENTIALS})

    const url = `${process.env.APP_URL}/login`

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

export function logoutUserThunk(userData) {
  return (dispatch, getState) => {
    dispatch({type: LOGOUT_USER})
    const url = `${process.env.APP_URL}/logout`
    const data = {
      email: getState().user.email
    }

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-User-Email': getState().user.email,
      'X-User-Token': getState().user.token
    }

    try {
      axios({method: 'DELETE', url, data, headers})
        .then(response => {
          dispatch(clearUserDetails())
          dispatch(toastThunks.showToast({status: 'ok', msg: 'Logged out'}))
        })
        .catch(reason => {
          console.error(reason)
          dispatch(toastThunks.showToast({status: 'critical', msg: reason.toString()}))
        })
    } catch(e) {
      console.error(e)
      dispatch(toastThunks.showToast({status: 'critical', msg: e.toString()}))
    }
  }
}
