import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import DashboardIcon from 'grommet/components/icons/base/Dashboard'

import cssModules from 'react-css-modules'
import * as styles from './index.module.scss'

import provideAuthenticadStatus from '../../HOC/provideAuthenticatedStatus'

let AppHeader = (props) => {
  const { adminView, authenticated } = props
  const label = adminView ? 'JG ADMIN' : 'JG'
  const cIndex = adminView ? 'neutral-1' : 'grey-1'
  const icon = adminView ? <DashboardIcon /> : undefined
  const titlePath = adminView ? '/admin/newproject' : '/'

  return (
    <Header size="medium"
            fixed
            colorIndex={cIndex}
            className={styles.header}
            justify="between"
            pad={{horizontal: 'medium', vertical: 'none'}}>
      <Title>
        <Anchor icon={icon} path={titlePath} label={label}/>
      </Title>
      <Box pad={{horizontal: 'small', vertical: 'none'}}>
        <Menu inline
              responsive
              direction="row">
          <Anchor path="/" label="ABOUT"/>
          <Anchor path="/projects" label="PROJECTS"/>
          { authenticated ? (
            <Menu inline={false}
                  label="ADMIN"
                  responsive>
              <Anchor path="/admin/newproject" label="ADD PROJECT"/>
              <Anchor path="/admin/manageprojects" label="MANAGE PROJECTS"/>
              <Anchor path="/admin/images" label="IMAGES"/>
            </Menu>
          ) : null }
        </Menu>
      </Box>
    </Header>
  )
}

AppHeader.propTypes = {
	adminView: PropTypes.bool,
}

AppHeader.defaultProps = {
  adminView: false,
}

const mapState = state => ({
	adminView: state.appHeaderAdminView
})

AppHeader = cssModules(AppHeader, styles)
AppHeader = provideAuthenticadStatus(AppHeader)
export default connect(mapState, null)(AppHeader)
