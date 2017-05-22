import * as actions from './actions'
import axios from 'axios'

export function getAllImages() {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_IMAGES})
    const url = process.env.IMGUR_API_GET_ALBUM_URL
    const config = {
      headers: {
        'Authorization': `CLIENT-ID ${process.env.IMGUR_API_CLIENT_ID}`
      }
    }

    try {
      axios.get(url, config)
        .then(response => {
          console.log(response)
          const { data } = response.data

          const results = {}

          for (let i in data) {
            const { id } = data[i]
            results[id] = data[i]
          }

          dispatch({
            type: actions.RECEIVE_ALL_IMAGES,
            payload: results
          })
        })
    } catch(e) {
      console.error(e)
    }
  }
}

export function getOneImage(id) {
  return (dispatch) => {
    dispatch({type: actions.GET_ONE_IMAGE})
    //

    try {
      axios.get(url)
        .then(response => {
          const {data} = response
          console.log(data)

          dispatch({
            type: actions.RECEIVE_ONE_IMAGE,
            payload: data
          })
        })
    } catch (e) {
      console.error(e)
    }
  }
}

