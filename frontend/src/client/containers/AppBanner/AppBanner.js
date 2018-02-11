import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Label from 'grommet/components/Label'
import Anchor from 'grommet/components/Anchor'
import MailIcon from 'grommet/components/icons/base/Mail'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedinOption'
import GithubIcon from 'grommet/components/icons/base/SocialGithub'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'
import Headline from 'grommet/components/Headline'

import graphicsBg from 'xyz-portfolio-bg'
import cssModules from 'react-css-modules'
import styles from './index.module.scss'
import provideWindowWidth from '../../../shared/HOC/provideWindowWidth'

import { SET_HEIGHT_OFFSET_OF_BANNER } from '../../../app'

class AppBanner extends React.Component {
  constructor(props) {
    super(props)
    this.canvasParentRef = undefined
    this.contentRef = ''
  }

  componentDidMount() {
    // const optimizedWidth = window.innerWidth && document.documentElement.clientWidth ?
    //   Math.min(window.innerWidth, document.documentElement.clientWidth) :
    //   window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth

//    if (this.props.large) {
      const opts = {
          height: 0.85 * window.innerHeight,
          colorA: 0xFBDA61,
          colorB: 0xFF5ACD,
      }
//
        document.getElementById('canvasContainer').appendChild(graphicsBg(opts))
        // this.props.setBannerOffset(700)
//    }
  }

  componentWillUnmount() {
    this.canvasParentRef = null
  }

  render() {
    const { primary, secondary, large } = this.props

    const mobileBreak = this.props.width < 724
    const largeHorPad = { horizontal: 'large', vertical: 'none' }

    const TitleDetails = () => (
      <Box pad="medium" align="center" textAlign="left">
        <Headline size="small" className={styles.text}>{primary}</Headline>
        <Box className={styles.textSecondary}>
          <Paragraph margin="none">{secondary}</Paragraph>
        </Box>
      </Box>
    )

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

    return (
      <Section className={styles.container} id="canvasContainer" ref={el => this.canvasParentRef = el}>
        <Box pad="large"
             className={ styles.presContainer }
             align="center">
          <Box direction={'column'}
               align="center"
               pad="large">
            <Box className={styles.presentation}
                  align="center">
              <Image src="assets/jonathan1.jpg"
                      size="small"
                      alt="jonathan"/>
              <TitleDetails />
            </Box>
            <Box align="start" pad={'none'}>
              <SocialLink icon={mobileBreak ? undefined : <MailIcon />}
                          label="jonathan.grangien@gmail.com" />
              <SocialLink icon={<GithubIcon />}
                          link="https://github.com/jon-grangien/"
                          label="GitHub" />
              <SocialLink icon={<LinkedInIcon />}
                          link="https://www.linkedin.com/in/jonathan-grangien-630859104/"
                          label="LinkedIn" />
            </Box>
          </Box>
        </Box>
      </Section>
    )
  }
}

AppBanner.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  large: PropTypes.bool,
}

AppBanner.defaultProps = {
  primary: 'Jonathan Grangien',
  secondary: 'Developer based in Sweden with a passion for front end development, computer graphics, visualization and innovative tech.',
  large: false,
}

const mapDispatch = dispatch => ({
  setBannerOffset: offset => dispatch({type: SET_HEIGHT_OFFSET_OF_BANNER, payload: offset})
})

AppBanner = connect(null, mapDispatch)(AppBanner)
AppBanner = provideWindowWidth(AppBanner)
export default cssModules(AppBanner, styles)
