import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import MailIcon from 'grommet/components/icons/base/Mail'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedinOption'

const SocialLink = (props) => (
  <Anchor href={props.link}
          target="_blank"
          align="center"
          animateIcon={false}
          icon={props.icon} />
)

const SocialIcons = (props) => (
  <Box align={props.align || 'start'} direction="row" pad="none" responsive={props.responsive || false}>
    <SocialLink icon={<MailIcon colorIndex={props.iconColorIndex || undefined}/>}
                link="mailto:jonathan.grangien@gmail.com" />
    <SocialLink icon={<GithubIcon colorIndex={props.iconColorIndex || undefined} />}
                link="https://github.com/jon-grangien/" />
    <SocialLink icon={<LinkedInIcon colorIndex={props.iconColorIndex || undefined} />}
                link="https://www.linkedin.com/in/jonathan-grangien-630859104/" />
  </Box>
)

export default SocialIcons
