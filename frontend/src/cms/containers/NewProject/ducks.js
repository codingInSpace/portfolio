import axios from 'axios'
import { toastThunks } from '../../../shared/containers/AppToast'

export const SUBMIT_NEW_PROJECT_DATA = 'SUBMIT_NEW_PROJECT_DATA'
export const SUCCEED_SUBMITTING_NEW_PROJECT_DATA = 'SUCCEED_SUBMITTING_NEW_PROJECT_DATA'
export const FAIL_SUBMITTING_NEW_PROJECT_DATA = 'FAIL_SUBMITTING_NEW_PROJECT_DATA'

export const CLEAR_NEW_PROJECT_FORM = 'CLEAR_NEW_PROJECT_FORM'
export const FINISH_CLEAR_NEW_PROJECT_FORM = 'FINISH_CLEAR_NEW_PROJECT_FORM'

export default function newProjectClearFormReducer(state = false, action) {
  switch (action.type) {
    case CLEAR_NEW_PROJECT_FORM:
      state = true
      break;
    case FINISH_CLEAR_NEW_PROJECT_FORM:
      state = false
      break;
    default:
      break;
  }

  return state;
}

export function submitNewProject(data) {
  return (dispatch, getState) => {
    dispatch({type: SUBMIT_NEW_PROJECT_DATA})
    const url = `${process.env.API_HOST}/projects`

    let tags = data.tagsString.split(',')
    console.log(tags)
    for (let i in tags) {
      tags[i] = tags[i].at(0) === ' ' ? tags[i].substring(1) : tags[i]
    }

    const postPayload = {
      title: data.title,
      short_desc: data.shortDesc,
      long_desc: data.longDesc,
      src_url: data.srcUrl,
      app_url: data.appDemoUrl,
      app_link_label: data.appDemoLabel,
      projectteam: data.projectTeamDesc,
      primary_image_id: data.primaryImageId,
      tags
    }

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-User-Email': getState().user.email,
      'X-User-Token': getState().user.token
    }

    try {
      axios({
        method: 'POST',
        url,
        data: postPayload,
        headers
      })
        .then(response => {
          console.log(response)

          dispatch({type: SUCCEED_SUBMITTING_NEW_PROJECT_DATA})
          dispatch({type: CLEAR_NEW_PROJECT_FORM})
        })
        .catch(reason => {
          console.error(reason)
          dispatch(toastThunks.showToast({status: 'critical', msg: reason.toString()}))
        })
    } catch (e) {
      console.error(e)
      dispatch(toastThunks.showToast({status: 'critical', msg: e.toString()}))
    }
  }
}
