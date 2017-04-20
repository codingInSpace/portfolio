import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'

class Message extends React.Component {
	static propTypes = {
		msg: PropTypes.string
	}

	render() {
		return (
		<Box pad="large" colorIndex="light-2">
			{this.props.msg}
		</Box>
		)
	}
}

export default Message

