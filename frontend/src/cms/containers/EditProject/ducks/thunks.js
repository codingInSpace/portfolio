import * as actions from './actions'
import axios from 'axios'
import { toastThunks } from '../../../../shared/containers/AppToast'

import { projectsEntityThunks } from '../../../../shared/entities/Projects'
import { tagsEntityThunks } from '../../../../shared/entities/Tags'

export function updateProject(data) {
  return (dispatch, getState) => {
    dispatch({type: actions.UPDATE_PROJECT_DATA})
    const url = `${process.env.API_HOST}/projects/${data.id}`

    let tags = data.tagsString.split(',')
    for (let i in tags)
      tags[i] = tags[i].at(0) === ' ' ? tags[i].substring(1) : tags[i]

    const payload = {
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
        method: 'put',
        url: url,
        headers,
        data: payload
      })
        .then(response => {
          console.log(response)
          if (response.status === 204) {
            // dispatch notification
          }

          dispatch(projectsEntityThunks.getAllProjects())
          dispatch(tagsEntityThunks.getAllTags())
          dispatch(toastThunks.showToast({msg: `Updated project ${payload.title}`, status: 'ok'}))
        })
    } catch(e) {
      console.error(e)
      dispatch(toastThunks.showToast({msg: `Failed to update project ${payload.title}, ${e.toString()}`, status: 'critical'}))
    }
  }
}
