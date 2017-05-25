import React from 'react'
import { connect } from 'react-redux'

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

        // Push away from location
        this.props.history.push(`/`)
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

  return connect(mapState, null)(ComponentWithAdminStatus)
}

export default restrictAuthentication
