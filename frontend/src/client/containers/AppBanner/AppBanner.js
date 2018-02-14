import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Label from 'grommet/components/Label'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'
import Headline from 'grommet/components/Headline'

import SocialIcons from '../../../shared/components/SocialIcons'

import cssModules from 'react-css-modules'
import styles from './index.module.scss'
import provideWindowWidth from '../../../shared/HOC/provideWindowWidth'

import { SET_HEIGHT_OFFSET_OF_BANNER } from '../../../app'

class AppBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      graphicsLoaded: false,
      mounted: false
    }
  }

  componentDidMount() {
    this.setState({ mounted: true })

    // if (this.props.width > 724) {
    //   this.loadGraphicsChunk()
    // }
  }

  loadGraphicsChunk() {
    if (this.state.graphicsLoaded) {
      return
    }

    import(/* webpackChunkName: "graphics" */ 'xyz-portfolio-bg').then(bg => {
      const opts = {
          height: 0.85 * window.innerHeight,
          colorA: 0xFBDA61,
          colorB: 0xFF5ACD,
      }
      document.getElementById('canvasContainer').appendChild(bg.default(opts))
      window.dispatchEvent(new Event('resize')) // For canvas to adjust
      this.setState({ graphicsLoaded: true })
    })
  }

  render() {
    const { primary, secondary, large } = this.props
    const { mounted, graphicsLoaded } = this.state

    const mobileBreak = this.props.width < 724
    const largeHorPad = { horizontal: 'large', vertical: 'none' }
    const medHorPad = { horizontal: 'medium', vertical: 'none' }

    if (!mobileBreak && mounted && !graphicsLoaded) {
      this.loadGraphicsChunk()
    }

    const Title = () => (
      <Headline size="large" strong className={styles.text}>{primary}</Headline>
    )

    const Details = () => (
      <Box direction="row" justify="start" textAlign="left">
        { !mobileBreak && ( <Image src="assets/jonathan1.jpg"
                size="small"
                alt="jonathan"/> ) }
        <Box pad={medHorPad} className={styles.textSecondary}>
          <Paragraph size="large">{secondary}</Paragraph>
          <SocialIcons iconColorIndex='light-2' />
        </Box>
      </Box>
    )

    return (
      <Section className={styles.container} id="canvasContainer">
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
        <svg style={{zIndex: '-1', position: 'absolute', width: '100%', height: '85vh'}}>
          <defs>
            <clipPath id="bannerClip">
              <ellipse rx="75%" ry="20%" cx="50%" cy="73%"/>
              <rect x="0" y="0" width="100%" height="80%" />
            </clipPath>
          </defs>
        </svg>
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
