import * as actions from './actions'
import axios from 'axios'

export function submitNewProject(data) {
  return (dispatch, getState) => {
    dispatch({type: actions.SUBMIT_NEW_PROJECT_DATA})
    const url = `${process.env.API_HOST}/projects`

    const postPayload = {
      title: data.title,
      short_desc: data.shortDesc,
      long_desc: data.longDesc,
      src_url: data.srcUrl,
      app_url: data.appDemoUrl,
      app_link_label: data.appDemoLabel,
      projectteam: data.projectTeamDesc
    }

    try {
      axios.post(url, postPayload)
        .then(response => {
          console.log(response)
          dispatch({type: actions.SUCCEED_SUBMITTING_NEW_PROJECT_DATA})
          dispatch({type: actions.CLEAR_NEW_PROJECT_FORM})
        })
    } catch (e) {
      console.error(e)
      dispatch({type: actions.FAIL_SUBMITTING_NEW_PROJECT_DATA})
    }
  }
}

