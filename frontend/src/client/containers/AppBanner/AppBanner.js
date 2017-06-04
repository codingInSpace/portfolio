import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Headline from 'grommet/components/Headline'

// I made this https://github.com/codingInSpace/violet-sine-rose
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
    if (this.props.large) {
      const width = window.innerWidth
      const height = 700
      this.canvasParentRef.appendChild(rose(width, height, true))
      this.props.setBannerOffset(height)
    }
  }

  componentWillUnmount() {
    this.canvasParentRef = null
  }

  render() {
    const {primary, secondary, large} = this.props

    const HeadLine = () => (
      <Box pad='medium'>
        <Headline size="small" className={styles.text}>{primary}</Headline>
      </Box>
    )

    return (
      <div>
        { large ? <div style={{position: 'absolute', top: '72px', zIndex: 0, }} ref={el => this.canvasParentRef = el}></div> : null }
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
                  <HeadLine />
                </Box>
              ) : (
                <HeadLine />
              ) }
            <Box pad={large ? 'large' : 'medium'} className={styles.text}>
              { secondary.map(text => (
                <div key={text.length.toString()}><Label margin="none">{text}</Label><br /></div>
              )) }
            </Box>
          </Box>
        </Box>
      </div>
    )
  }
}

AppBanner.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.arrayOf(PropTypes.string),
  large: PropTypes.bool,
}

AppBanner.defaultProps = {
  primary: 'Jonathan Grangien',
  secondary: ['Developer', 'Web fullstack-er', 'Comp graphics enthusiast', 'MSc engineering student'],
  large: false,
}

const mapDispatch = dispatch => ({
  setBannerOffset: offset => dispatch({type: SET_HEIGHT_OFFSET_OF_BANNER, payload: offset})
})

AppBanner = connect(null, mapDispatch)(AppBanner)
export default cssModules(AppBanner, styles)
