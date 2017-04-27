import * as actions from './actions'
import axios from 'axios'
import { normalize, schema } from 'normalizr'

export function getAllProjects() {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_PROJECTS})
    const url = `${process.env.API_HOST}/projects`

    try {
      axios.get(url)
        .then(response => {
          const { data } = response

          //const project = new schema.Entity('projects');
          //tags...
          //const normalizedData = normalize(data, project)

          const results = {}

          for (let i in data) {
            const { id } = data[i]
            results[id] = data[i]
          }

          dispatch({
            type: actions.RECEIVE_ALL_PROJECTS,
            payload: results
          })
        })
    } catch(e) {
      console.error(e)
    }
  }
}