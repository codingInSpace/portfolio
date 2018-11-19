import React from 'react'
import { connect } from 'react-redux'

import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Heading from 'grommet/components/Heading'

import cssModules from 'react-css-modules'
import styles from './index.module.scss'
import provideWindowWidth from '../../HOC/provideWindowWidth'

import { logoutUserThunk } from '../../../cms/containers/Login'

class AppFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const loggedIn = this.props.user.token !== ''
    const mobileBreak = this.props.width < 400

    return (
      <Footer size="large"
              className={styles.footer}
              justify="center"
              pad="large">
        <Box direction="column" align="center" className={styles.content}>
          <Box>
            { mobileBreak ? (
              <p style={{color: '#fff'}}>jonathan.grangien@gmail.com</p>
            ) : (
              <Heading style={{color: '#fff'}} tag="h2">jonathan.grangien@gmail.com</Heading>
            )}
          </Box>
          <Anchor style={{color: '#fff', textDecoration: 'none'}}
                  label={loggedIn ? 'logout' : 'login'}
                  path={loggedIn ? '/' : '/admin/login'}
                  onClick={loggedIn ? () => this.props.logout() : null} />
        </Box>
        <svg style={{zIndex: '-1', position: 'absolute', width: '100%', height: '15vh'}}>
          <defs>
            <clipPath id="footerClip">
              <ellipse rx="75%" ry="50%" cx="50%" cy="90%"/>
              <rect x="0" y="90%" width="100%" height="100%" />
            </clipPath>
          </defs>
        </svg>
      </Footer>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUserThunk())
})

AppFooter = cssModules(AppFooter, styles)
AppFooter = provideWindowWidth(AppFooter)
export default connect(mapState, mapDispatch)(AppFooter)
