import React from 'react'
import PropTypes from 'prop-types'

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

import AppBanner from '../AppBanner'

const Portfolio = props => (
	<Box>
		<AppBanner large={false}/>
		<Box pad="medium" align="center" textAlign="center">
			<Heading tag="h1" margin="none">Projects</Heading>
		</Box>
	</Box>
)

export default Portfolio

