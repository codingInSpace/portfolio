import * as actions from './actions'
import axios from 'axios'

export function getAllTags() {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_TAGS})
    const url = `${process.env.API_HOST}/tags`

    try {
      axios.get(url)
        .then(response => {
          const { data } = response
          console.log(data)

          const results = {}

          for (let i in data) {
            const { id } = data[i]
            results[id] = data[i]
          }

          dispatch({
            type: actions.RECEIVE_ALL_TAGS,
            payload: results
          })
        })
    } catch(e) {
      console.error(e)
    }
  }
}

export function getOneTag(id) {
  return (dispatch) => {
    dispatch({type: actions.GET_ONE_TAG})
    const url = `${process.env.API_HOST}/tags/${id}`

    try {
      axios.get(url)
        .then(response => {
          const {data} = response

          dispatch({
            type: actions.RECEIVE_ONE_TAG,
            payload: data
          })
        })
    } catch (e) {
      console.error(e)
    }
  }
}

