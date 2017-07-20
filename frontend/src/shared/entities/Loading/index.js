const PROJECTS_LOADING = 'PROJECTS_LOADING'
const PROJECTS_DONE_LOADING = 'PROJECTS_DONE_LOADING'

export default function (state = false, action) {
  switch (action.type) {
    case PROJECTS_LOADING:
      state = true
      break;
    case PROJECTS_DONE_LOADING:
      state = false
      break;
    default:
      break;
  }

  return state
}

// Action creators
export function setProjectsLoading() {
  return ({ type: PROJECTS_LOADING })
}

export function clearProjectsLoading() {
  return ({ type: PROJECTS_DONE_LOADING })
}
