import React from 'react'
import { connect } from 'react-redux'
import { adminHeaderActions } from '../containers/AppHeader'

const setAdminColor = (BaseComponent, status) => {
	class ComponentInColoredView extends React.Component {
		constructor(props) {
			super(props)
		}

		componentWillMount() {
			if (status)
				this.props.setAdminView()
			else
				this.props.setNormalView()
		}

		render() {
			return <BaseComponent />
		}
	}

	const mapDispatch = dispatch => ({
		setAdminView: () => dispatch({type: adminHeaderActions.SET_ADMIN_HEADER_COLOR}),
		setNormalView: () => dispatch({type: adminHeaderActions.SET_NORMAL_HEADER_COLOR}),
	})

	return connect(null, mapDispatch)(ComponentInColoredView)
}

export default setAdminColor
