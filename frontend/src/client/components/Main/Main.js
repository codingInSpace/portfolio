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
import provideWindowWidth from '../../../shared/HOC/provideWindowWidth'

import AppBanner from '../../containers/AppBanner'
import Portfolio from '../../containers/Portfolio'
import descMain from './text'
import * as styles from './index.module.scss'

const SocialLink = (props) => {
  return (props.link === undefined) ? (
      <Box align="center" justify="start" direction="row">
        {props.icon}
        <Box pad="small"><Label truncate margin="none">{props.label}</Label></Box>
      </Box>
  ) : (
    <Anchor href={props.link}
            target="_blank"
            align="center"
            label={<Label margin="none">{props.label}</Label>}
            icon={props.icon} />
  )
}

let Main = (props) => {
  const isOffset = props.bannerOffset > 0
  const mobileBreak = props.width < 724
  const largeHorPad = { horizontal: 'large', vertical: 'none' }

  const offsetStyle = {
    paddingTop: props.bannerOffset
  }

  return (
		<div>
			<AppBanner large />
			<div style={isOffset ? offsetStyle : {}}>
        <Portfolio />
        <Box pad="large"
             direction="row"
             align="center"
             justify="center">
          <Box align="start" pad={largeHorPad}>
            <SocialLink icon={mobileBreak ? undefined : <MailIcon />}
                        label="jonathan.grangien@gmail.com" />
            <SocialLink icon={<GithubIcon />}
                        link="https://github.com/codingInSpace/"
                        label="GitHub" />
            <SocialLink icon={ <LinkedInIcon /> }
                        link="https://www.linkedin.com/in/jonathan-grangien-630859104/"
                        label="LinkedIn" />
          </Box>
        </Box>
			</div>
		</div>
  )
}

Main = cssModules(Main, styles)
Main = setHeaderView(Main, false)
Main = provideWindowWidth(Main)
export default Main
