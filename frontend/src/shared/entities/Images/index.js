import axios from 'axios'

// Actions
export const GET_ALL_IMAGES = 'GET_ALL_IMAGES'
export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES'

export const GET_ONE_IMAGE = 'GET_ONE_IMAGE'
export const RECEIVE_ONE_IMAGE = 'RECEIVE_ONE_IMAGE'

// Reducer
export default function(state = {}, action) {
  switch(action.type) {
    case RECEIVE_ALL_IMAGES:
      state = action.payload
      break;
    case RECEIVE_ONE_IMAGE:
      state = {...state}
      state[action.payload.id] = action.payload
      break;
  }

  return state
}

// Thunks

/**
 * Change the http part of the link to https
 * Imgur api seemingly does not provide this but it works
 * {string} link - The link to an image
 */
function secureLink(link) {
  return link.replace('http', 'https')
}

/**
 * Get all images from the Imgur album
 */
export function getAllImages() {
  return (dispatch) => {
    dispatch({type: GET_ALL_IMAGES})
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
            results[id] = {...data[i], link: secureLink(data[i].link)}
          }

          dispatch({
            type: RECEIVE_ALL_IMAGES,
            payload: results
          })
        })
    } catch(e) {
      console.error(e)
    }
  }
}

/**
 * Get one image
 * {string} id - The imgur api id of the image
 */
export function getOneImage(id) {
  return (dispatch) => {
    dispatch({type: GET_ONE_IMAGE})

    try {
      axios.get(url)
        .then(response => {
          const {data} = response
          console.log(data)

          dispatch({
            type: RECEIVE_ONE_IMAGE,
            payload: data
          })
        })
    } catch (e) {
      console.error(e)
    }
  }
}

