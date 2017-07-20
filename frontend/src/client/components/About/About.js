import React from 'react'

import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Button from 'grommet/components/Button'
import Anchor from 'grommet/components/Anchor'
import LinkNext from 'grommet/components/icons/base/LinkNext'
import MailIcon from 'grommet/components/icons/base/Mail'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedinOption'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import cssModules from 'react-css-modules'

import setHeaderView from '../../../shared/HOC/setHeaderView'

import AppBanner from '../../containers/AppBanner'
import descMain from './text'
import * as styles from './index.module.scss'

const SocialLink = (props) => {
  return (props.link === undefined) ? (
      <Box align="center" justify="start" direction="row">
        {props.icon}
        <Box pad="small"><Label margin="none">{props.label}</Label></Box>
      </Box>
  ) : (
    <Anchor href={props.link}
            target="_blank"
            align="center"
            label={<Label margin="none">{props.label}</Label>}
            icon={props.icon} />
  )
}

const About = (props) => {
  const isOffset = props.bannerOffset > 0

  const offsetStyle = {
    paddingTop: props.bannerOffset
  }

  return (
		<div>
			<AppBanner large />
			<div style={isOffset ? offsetStyle : {}}>
        <Box pad="large"
             align="center"
             textAlign="center">
          <Paragraph className={styles.mainText}
                     size="large">
            {descMain}
          </Paragraph>
        </Box>
        <Box pad="large"
             direction="row"
             align="center"
             justify="center">
          <Box pad="large" margin="large"><Heading tag="h1">Recent Work</Heading></Box>
          <Box pad="large"
               margin="large"
               align="center"
               size="medium">
            <Paragraph align="center" size="large">I list some of my experiences and work in courses or elsewhere.</Paragraph>
            <Button icon={<LinkNext />}
                    plain
                    label="Projects"
                    path="/projects" />
          </Box>
        </Box>
        <Box pad="large"
             direction="row"
             align="center"
             justify="center">
          <Box pad="large" align="start">
            <SocialLink icon={<MailIcon />} label="jonathan.grangien@gmail.com" />
            <SocialLink icon={<GithubIcon />}
                        link="https://github.com/codingInSpace/"
                        label="GitHub" />
            <SocialLink icon={ <LinkedInIcon /> }
                        link="https://www.linkedin.com/in/jonathan-grangien-630859104/"
                        label="LinkedIn" />
          </Box>
          <Box pad="large" margin="large">
            <Heading tag="h1" margin="small">Follow</Heading>
          </Box>
        </Box>
			</div>
		</div>
  )
}

export default setHeaderView(cssModules(About, styles), false)
