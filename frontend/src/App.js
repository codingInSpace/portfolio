import React from 'react'
import PropTypes from 'prop-types'
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'

import Message from './Message'

class AppComponent extends React.Component {
	render() {
		return (
		<App centered={false}>
			<Message msg="hello"/>
		</App>
		)
	}
}

export default AppComponent
