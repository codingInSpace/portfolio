import * as actions from './actions'
import axios from 'axios'

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

export function getOneProject(id) {
  return (dispatch) => {
    dispatch({type: actions.GET_ONE_PROJECT})
    const url = `${process.env.API_HOST}/projects/${id}`

    try {
      axios.get(url)
        .then(response => {
          const {data} = response
          console.log(data)

          dispatch({
            type: actions.RECEIVE_ONE_PROJECT,
            payload: data
          })
        })
    } catch (e) {
      console.error(e)
    }
  }
}

