import React from 'react'
import PropTypes from 'prop-types'
import Box from 'grommet/components/Box'

import AppBanner from '../AppBanner'

const Portfolio = props => (
	<Box>
		<AppBanner large={false}/>
		<Box pad="large">Portfolio</Box>
	</Box>
)

export default Portfolio

