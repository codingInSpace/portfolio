import * as actions from './actions'
import axios from 'axios'

import { getAllProjects } from '../../../../shared/entities/Projects'

export function deleteProject(id) {
  return (dispatch, getState) => {
    dispatch({type: actions.DELETE_PROJECT})
    const url = `${process.env.API_HOST}/projects/${id}`

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-User-Email': getState().user.email,
      'X-User-Token': getState().user.token
    }

    try {
      axios({
        method: 'delete',
        url: url,
        headers,
        data: {id}
      })
        .then(response => {
          const { data } = response
          console.log(data)

          dispatch(getAllProjects())
        })
    } catch(e) {
      console.error(e)
    }
  }
}
