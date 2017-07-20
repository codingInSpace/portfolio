import axios from 'axios'
import { setProjectsLoading, clearProjectsLoading } from '../Loading'

// Actions
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS'
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS'

export const GET_ONE_PROJECT = 'GET_ONE_PROJECT'
export const RECEIVE_ONE_PROJECT = 'RECEIVE_ONE_PROJECT'

// Reducer
export default function (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_PROJECTS:
      state = action.payload
      break;
    case RECEIVE_ONE_PROJECT:
      state = {...state}
      state[action.payload.id] = action.payload
      break;
    default:
      break;
  }

  return state
}

// Thunks
export function getAllProjects() {
  return (dispatch) => {
    dispatch(setProjectsLoading())
    dispatch({type: GET_ALL_PROJECTS})
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

          dispatch(clearProjectsLoading())

          dispatch({
            type: RECEIVE_ALL_PROJECTS,
            payload: results
          })
        })
    } catch(e) {
      console.error(e)
      dispatch(clearProjectsLoading())
    }
  }
}

export function getOneProject(id) {
  return (dispatch) => {
    dispatch(setProjectsLoading())
    dispatch({type: GET_ONE_PROJECT})
    const url = `${process.env.API_HOST}/projects/${id}`

    try {
      axios.get(url)
        .then(response => {
          const {data} = response
          console.log(data)

          dispatch(clearProjectsLoading())

          dispatch({
            type: RECEIVE_ONE_PROJECT,
            payload: data
          })
        })
    } catch (e) {
      console.error(e)
      dispatch(clearProjectsLoading())
    }
  }
}

