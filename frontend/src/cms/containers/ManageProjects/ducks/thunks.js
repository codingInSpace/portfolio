import * as actions from './actions'
import axios from 'axios'

import { projectsEntityThunks } from '../../../../shared/entities/Projects'

export function deleteProject(id) {
  return (dispatch) => {
    dispatch({type: actions.DELETE_PROJECT})
    const url = `${process.env.API_HOST}/projects/${id}`

    try {
      axios({
        method: 'delete',
        url: url,
        data: {id}
      })
        .then(response => {
          const { data } = response
          console.log(data)

          dispatch(projectsEntityThunks.getAllProjects())
        })
    } catch(e) {
      console.error(e)
    }
  }
}
