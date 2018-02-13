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
    const medHorPad = { horizontal: 'medium', vertical: 'none' }

    const Title = () => (
      <Headline size="large" strong className={styles.text}>{primary}</Headline>
    )

    const SocialLink = (props) => (
      <Anchor href={props.link}
              target="_blank"
              align="center"
              animateIcon={false}
              icon={props.icon} />
    )

    const iconColorIndex = 'light-2'

    const Details = () => (
      <Box direction="row" justify="start" textAlign="left">
        <Image src="assets/jonathan1.jpg"
                size="small"
                alt="jonathan"/>
        <Box pad={medHorPad} className={styles.textSecondary}>
          <Paragraph size="large">{secondary}</Paragraph>
          <Box align="start" direction="row" pad="none">
            <SocialLink icon={<MailIcon colorIndex={iconColorIndex}/>}
                        link="mailto:jonathan.grangien@gmail.com" />
            <SocialLink icon={<GithubIcon colorIndex={iconColorIndex} />}
                        link="https://github.com/jon-grangien/" />
            <SocialLink icon={<LinkedInIcon colorIndex={iconColorIndex} />}
                        link="https://www.linkedin.com/in/jonathan-grangien-630859104/" />
          </Box>
        </Box>
      </Box>
    )

    return (
      <Section className={styles.container} id="canvasContainer" ref={el => this.canvasParentRef = el}>
        <Box pad="large"
             className={ styles.presContainer }
             align="start">
          <Box direction={'column'}
               align="start"
               pad="small">
            <Box className={styles.presentation}
                  align="start">
              <Title />
              <Details />
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
  primary: `Jonathan 
  Grangien`,
  secondary: 'Developer based in Sweden with a passion for front end development, computer graphics, visualization and innovative tech.',
  large: false,
}

const mapDispatch = dispatch => ({
  setBannerOffset: offset => dispatch({type: SET_HEIGHT_OFFSET_OF_BANNER, payload: offset})
})

AppBanner = connect(null, mapDispatch)(AppBanner)
AppBanner = provideWindowWidth(AppBanner)
export default cssModules(AppBanner, styles)
