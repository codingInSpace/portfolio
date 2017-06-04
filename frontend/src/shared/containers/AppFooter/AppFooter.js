import React from 'react'
import { connect } from 'react-redux'

import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'

import { logoutUserThunk } from '../../../cms/containers/Login'

const AppFooter = (props) => {
  const loggedIn = props.user.token !== ''

	return (
    <Footer size="large"
            justify="between"
            align="end"
            pad="large">
      <Box>jonathan.grangien@gmail.com</Box>
      { loggedIn ? (
        <Anchor label="logout" path="/" onClick={() => props.logout()} />
      ) : (
        <Anchor label="login" path="/admin/login" />
      ) }
    </Footer>
  )
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  logout: () => dispatch(logoutUserThunk())
})

export default connect(mapState, mapDispatch)(AppFooter)
