import React from 'react'
import { connect } from 'react-redux'
import { toastThunks } from '../containers/AppToast'

/**
 * HOC that redirects user away from page if not authenticated
 * @param BaseComponent
 * @returns {*}
 */
const restrictAuthentication = (BaseComponent) => {
  class ComponentWithAdminStatus extends React.Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      this.checkAuth()
    }

    checkAuth() {
      if (this.props.user.id === '') {
        const triedPath = this.props.history.location.pathname

        // Push away from location
        this.props.history.push(`/`)
        this.props.notify(triedPath)
      }
    }

    render() {
      const authenticated = this.props.user.id !== ''
      return authenticated ? <BaseComponent {...this.props} /> : null
    }
  }

  const mapState = state => ({
    user: state.user
  })

  const mapDispatch = dispatch => ({
    notify: (path) => dispatch(toastThunks.showToast({status: 'critical', msg: `You are not authorized to view ${path}`}))
  })

  return connect(mapState, mapDispatch)(ComponentWithAdminStatus)
}

export default restrictAuthentication
