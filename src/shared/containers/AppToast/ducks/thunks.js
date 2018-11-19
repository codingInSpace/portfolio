import * as actions from './actions'

export function showToast(data) {
  return (dispatch, getState) => {
    // Close toast if a current exists
    if (getState().appToast.msg.length > 0)
      dispatch({type: actions.CLOSE_TOAST})

    // Show new toast
    dispatch({type: actions.SHOW_A_NEW_TOAST, payload: data})
  }
}
