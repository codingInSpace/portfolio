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
          dispatch({
            type: actions.RECEIVE_ALL_PROJECTS,
            payload: data
          })
        })
    } catch(e) {
      console.error(e)
    }
  }
}