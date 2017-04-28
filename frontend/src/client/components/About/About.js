import React from 'react'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Anchor from 'grommet/components/Anchor'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import AppBanner from '../AppBanner'
import descMain from './text'

const About = (props) => {
	console.log(props)

	const isOffset = props.bannerOffset > 0

	const offsetStyle = {
		position: 'absolute',
		top: props.bannerOffset
	}

	return (
		<div>
			<AppBanner large />
			<div style={isOffset ? offsetStyle : {}}>
			<Box pad="large" align="center" textAlign="center">
				<Paragraph size="large">{descMain}</Paragraph>
			</Box>
			<Box pad="large" align="center">
				<Heading tag="h2" margin="none">Recent Work</Heading>
				<Box pad="small">
					<Anchor icon={<LinkNext />}
									label="Projects"
									path="/projects" />
				</Box>
			</Box>
			<Box pad="large" align="center" textAlign="center">
				<Heading tag="h2" margin="none">Get in touch</Heading>
				<Label margin="none">jonathan.grangien@gmail.com</Label>
			</Box>
			<Box pad="large" align="center" textAlign="center">
				<Heading tag="h2" margin="none">Follow</Heading>
				<Label margin="none">linkedin, github</Label>
			</Box>
			</div>
		</div>
  )
}

export default About
