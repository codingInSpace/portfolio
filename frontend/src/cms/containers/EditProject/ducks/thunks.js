import * as actions from './actions'
import axios from 'axios'

import { projectsEntityThunks } from '../../../../shared/entities/Projects'

export function updateProject(data) {
  return (dispatch) => {
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

    try {
      axios({
        method: 'put',
        url: url,
        data: payload
      })
        .then(response => {
          console.log(response)
          if (response.status === 204) {
            // dispatch notification
          }

          dispatch(projectsEntityThunks.getAllProjects())
        })
    } catch(e) {
      console.error(e)
    }
  }
}
