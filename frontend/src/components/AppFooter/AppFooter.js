import React from 'react'
import PropTypes from 'prop-types'

import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'

const AppFooter = (props) => (
	<Footer size="medium"
					justify="between"
					align="end"
					pad={{horizontal: 'medium', vertical: 'none'}}>
		<Box>jonathan.grangien [at] gmail.com</Box>
	</Footer>
)

export default AppFooter
