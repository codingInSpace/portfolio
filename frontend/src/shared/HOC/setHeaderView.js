import React from 'react'
import { connect } from 'react-redux'
import { adminHeaderActions } from '../containers/AppHeader'

/**
 * HOC that allows a component to update the header view
 * @param BaseComponent
 * @param {boolean} cmsView - Whether header should be viewed as cms variant or normal variant
 * @returns {*}
 */
const setHeaderView = (BaseComponent, cmsView) => {
	class ComponentThatUpdatesHeader extends React.Component {
		constructor(props) {
			super(props)
		}

		componentWillMount() {
			const { headerIsCmsView } = this.props

		  if (cmsView && !headerIsCmsView)
		  	this.props.setAdminView()
			else if (!cmsView && headerIsCmsView)
				this.props.setNormalView()
		}

		render() {
			return <BaseComponent {...this.props}/>
		}
	}

	const mapState = state => ({
		headerIsCmsView: state.appHeaderAdminView
	})

	const mapDispatch = dispatch => ({
		setAdminView: () => dispatch({type: adminHeaderActions.SET_ADMIN_HEADER_COLOR}),
		setNormalView: () => dispatch({type: adminHeaderActions.SET_NORMAL_HEADER_COLOR}),
	})

	return connect(mapState, mapDispatch)(ComponentThatUpdatesHeader)
}

export default setHeaderView
