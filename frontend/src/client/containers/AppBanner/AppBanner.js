import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Paragraph from 'grommet/components/Paragraph'
import Headline from 'grommet/components/Headline'

import rose from 'violet-sine-rose'
import cssModules from 'react-css-modules'
import styles from './index.module.scss'

import { SET_HEIGHT_OFFSET_OF_BANNER } from '../../../app'

class AppBanner extends React.Component {
  constructor(props) {
    super(props)
    this.canvasParentRef = ''
    this.contentRef = ''
  }

  componentDidMount() {
    const optimizedWidth = window.innerWidth && document.documentElement.clientWidth ?
      Math.min(window.innerWidth, document.documentElement.clientWidth) :
      window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth

    if (this.props.large) {
      const roseOpts = {
        width: optimizedWidth,
        height: 700,
        respondToWidth: true,
        bgColor: 'linear-gradient(20deg, #FFFEFF 0%, #ddf6ff 100%)',
      }

      this.canvasParentRef.appendChild(rose(roseOpts))
      this.props.setBannerOffset(roseOpts.height)
    }
  }

  componentWillUnmount() {
    this.canvasParentRef = null
  }

  render() {
    const { primary, secondary, large } = this.props

    const TitleDetails = () => (
      <Box pad="medium" align="center" textAlign="left">
        <Headline size="small" className={styles.text}>{primary}</Headline>
        <Box className={styles.textSecondary}>
          <Paragraph margin="none">{secondary}</Paragraph>
        </Box>
      </Box>
    )

    return (
      <div className={styles.container}>
        { large ? <div style={{position: 'absolute', zIndex: 0, }} ref={el => this.canvasParentRef = el}></div> : null }
        <Box pad={large ? 'large' : 'small'}
             className={ large ? styles.bannerLarge : styles.bannerSmall }
             align="center">
          <Box direction="row"
               align="center"
               pad="large">
            { large ? (
                <Box className={styles.presentation}
                     align="center">
                  <Image src="assets/jonathan1.jpg"
                         size="small"
                         alt="jonathan"/>
                  <TitleDetails />
                </Box>
              ) : (
                <TitleDetails />
              ) }
          </Box>
        </Box>
      </div>
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
  secondary: 'Developer based in Sweden with a passion for front end development, computer graphics, and innovative tech.',
  large: false,
}

const mapDispatch = dispatch => ({
  setBannerOffset: offset => dispatch({type: SET_HEIGHT_OFFSET_OF_BANNER, payload: offset})
})

AppBanner = connect(null, mapDispatch)(AppBanner)
export default cssModules(AppBanner, styles)
