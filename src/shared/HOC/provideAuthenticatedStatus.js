import React from 'react'
import { connect } from 'react-redux'

/**
 * HOC that determines user logged in status on client
 * @param BaseComponent
 * @returns {*}
 */
const provideAuthenticatedStatus = (BaseComponent) => {
  class ComponentWithAdminStatus extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return <BaseComponent authenticated={this.props.user.token !== ''} {...this.props}/>
    }
  }

  const mapState = state => ({
    user: state.user
  })

  return connect(mapState, null)(ComponentWithAdminStatus)
}

export default provideAuthenticatedStatus
