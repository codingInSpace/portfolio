import React from 'react'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Button from 'grommet/components/Button'
import Anchor from 'grommet/components/Anchor'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedinOption'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'

import AppBanner from '../../containers/AppBanner'
import descMain from './text'

const About = (props) => {
	const isOffset = props.bannerOffset > 0

	const offsetStyle = {
		paddingTop: props.bannerOffset
	}

	return (
		<div>
			<AppBanner large />
			<div style={isOffset ? offsetStyle : {}}>
			<Box pad="large" align="center" textAlign="center">
				<Paragraph size="large">{descMain}</Paragraph>
			</Box>
			<Box pad="large" align="center">
				<Heading tag="h1" margin="small">Recent Work</Heading>
				<Box pad="small" size="medium">
					<Button icon={<LinkNext />}
									accent={true}
									label="Projects"
									path="/projects" />
				</Box>
			</Box>
			<Box pad="large" align="center" textAlign="center">
				<Heading tag="h1" margin="small">Get in touch</Heading>
				<Label margin="none">jonathan.grangien@gmail.com</Label>
			</Box>
			<Box pad="large" align="center" textAlign="center">
				<Heading tag="h1" margin="small">Follow</Heading>
				<Box direction="row">
					<Anchor href="https://github.com/codingInSpace/"
									target="_blank"
									icon={ <GithubIcon size="large" /> } />
					<Anchor href="https://www.linkedin.com/in/jonathan-grangien-630859104/"
                  target="_blank"
                  icon={ <LinkedInIcon size="large" /> } />
				</Box>

			</Box>
			</div>
		</div>
  )
}

export default About
