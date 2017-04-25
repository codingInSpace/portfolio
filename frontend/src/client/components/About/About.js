import React from 'react'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Anchor from 'grommet/components/Anchor'
import LinkNext from 'grommet/components/icons/base/LinkNext'

import AppBanner from '../AppBanner'
import descMain from './text'

const About = () => (
	<div>
		<AppBanner large />
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
)

export default About
