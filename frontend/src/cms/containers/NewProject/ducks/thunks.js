import * as actions from './actions'
import axios from 'axios'
import { toastThunks } from '../../../../shared/containers/AppToast'

export function submitNewProject(data) {
  return (dispatch, getState) => {
    dispatch({type: actions.SUBMIT_NEW_PROJECT_DATA})
    const url = `${process.env.API_HOST}/projects`

    let tags = data.tagsString.split(',')
    for (let i in tags)
      tags[i] = tags[i].at(0) === ' ' ? tags[i].substring(1) : tags[i]

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

    console.log(headers)

    try {
      axios({
        method: 'POST',
        url,
        data: postPayload,
        headers
      })
        .then(response => {
          console.log(response)

          dispatch({type: actions.SUCCEED_SUBMITTING_NEW_PROJECT_DATA})
          dispatch({type: actions.CLEAR_NEW_PROJECT_FORM})
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

