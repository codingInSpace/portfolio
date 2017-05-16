import * as actions from './actions'
import axios from 'axios'

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
      tags
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

