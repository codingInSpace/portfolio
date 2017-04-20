import React from 'react'
import PropTypes from 'prop-types'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

import AppBanner from '../AppBanner'
import * as text from './text'

const About = props => (
	<Box>
		<AppBanner large={true}/>
		<Box pad="large" align="center">
			<Paragraph size="large">{text.descMain}</Paragraph>
		</Box>
	</Box>
)

export default About
