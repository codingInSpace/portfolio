import React from 'react'
import { connect } from 'react-redux'

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
		setAdminView: () => dispatch({type: 'SET_ADMIN_HEADER_COLOR'}),
		setNormalView: () => dispatch({type: 'SET_NORMAL_HEADER_COLOR'}),
	})

	return connect(null, mapDispatch)(ComponentInColoredView)
}

export default setAdminColor
