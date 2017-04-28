import React from 'react'
import { connect } from 'react-redux'
import App from 'grommet/components/App'
import cssModules from 'react-css-modules'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './app.module.scss';

import { AppHeader } from '../shared/containers/AppHeader'
import AppFooter from '../shared/components/AppFooter'

import setAdminColor from '../shared/HOC/setAdminColor'

import { NewProject } from '../cms/containers/NewProject'
import ManageProjects from '../cms/containers/ManageProjects'

import About from '../client/components/About'
import Portfolio from '../client/containers/Portfolio'

let AppComponent = (props) => {
  const { bannerOffset } = props

  return (
    <BrowserRouter>
      <App centered={false}>
        <AppHeader />
        <div className={styles.container}>
          <Switch>
            <Route exact path="/" component={setAdminColor(About, false, {bannerOffset})}/>
            <Route path="/projects" component={setAdminColor(Portfolio, false, {bannerOffset})}/>
            <Route path="/admin/newproject" component={setAdminColor(NewProject, true, {bannerOffset})}/>
            <Route path="/admin/manageprojects" component={setAdminColor(ManageProjects, true, {bannerOffset})}/>
          </Switch>
        </div>
        <AppFooter />
      </App>
    </BrowserRouter>
  )
}

const mapState = state => ({
  bannerOffset: state.appBannerOffset
})

AppComponent = connect(mapState, null)(AppComponent)
export default cssModules(AppComponent, styles)
