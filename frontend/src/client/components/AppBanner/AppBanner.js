import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Headline from 'grommet/components/Headline'

import cssModules from 'react-css-modules'
import styles from './index.module.scss'

import { mainActions } from '../../../app'
import rose from '../../../../public/violetrose'

class AppBanner extends React.Component {
  constructor(props) {
    super(props)
    this.mainRef = ''
    this.contentRef = ''
  }

  componentDidMount() {
    if (this.props.large) {
      const width = window.innerWidth
      //const height = this.contentRef.offsetHeight
      const height = 700
      console.log(width, height)

      this.mainRef.appendChild(rose(width, height))
      this.props.setBannerOffset(height)
    }
  }

  componentWillUnmount() {
    this.mainRef = null
  }

  render() {
    const {primary, secondary, large} = this.props
    return (
      <div style={{width: window.innerWidth}}>
        <div style={{position: 'absolute', top: '72px', zIndex: 0, }} ref={el => this.mainRef = el}></div>
        <Box pad={large ? 'large' : 'small'}
             style={{position: 'absolute', top: '72px', zIndex: 20}}
             align="center">
          <div ref={el => this.contentRef = el}>
          <Box direction="row" align="center" pad={{horizontal: 'large', vertical: 'none'}}>
            { large ? (
                <div className={styles.image}>
                  <Image src="assets/jonathan1.jpg"
                         size="small"
                         caption={primary || 'Jonathan Grangien'}
                         alt="jonathan"/>
                </div>
              ) : (
                <Box pad={large ? 'large' : 'medium'}>
                  <Headline>{primary}</Headline>
                </Box>
              ) }
            <Box pad={large ? 'large' : 'medium'}>
              { secondary.map(text => (
                <div key={text.length.toString()}><Label margin="none">{text}</Label><br /></div>
              )) }
            </Box>
          </Box>
          </div>
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
  setBannerOffset: offset => dispatch({type: mainActions.SET_HEIGHT_OFFSET_OF_BANNER, payload: offset})
})

AppBanner = connect(null, mapDispatch)(AppBanner)
export default cssModules(AppBanner, styles)
